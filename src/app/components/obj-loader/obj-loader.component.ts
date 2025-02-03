import { Component } from '@angular/core';

@Component({
  selector: 'app-obj-loader',
  standalone: true,
  imports: [],
  templateUrl: './obj-loader.component.html',
  styleUrl: './obj-loader.component.css',
})
export class ObjLoaderComponent {
  parser = `function parseOBJ(text) {
  ...
  const keywordRE = /(\w*)(?: )*(.*)/; // regex per separare la keyword dagli argomenti
  const lines = text.split("\n"); // separazione testo in righe
  for (let lineNo = 0; lineNo < lines.length; ++lineNo) {
    const line = lines[lineNo].trim();
    if (line === "" || line.startsWith("#")) {
      continue;
    }
    const m = keywordRE.exec(line);
    if (!m) {
      continue;
    }
    const [, keyword, unparsedArgs] = m;
    const parts = line.split(/\s+/).slice(1);
    const handler = keywords[keyword];
    if (!handler) {
      console.warn("unhandled keyword:", keyword); // gestisce le keyword non riconosciute
      continue;
    }
    handler(parts, unparsedArgs);
  }
}`;
  dataConversion = `function addVertex(vert) {
    const ptn = vert.split("/");
    ptn.forEach((objIndexStr, i) => {
        if (!objIndexStr) return;
        const objIndex = parseInt(objIndexStr);
        const index = objIndex + (objIndex >= 0 ? 0 : objVertexData[i].length);
        webglVertexData[i].push(...objVertexData[i][index]);
    });
}

const keywords = {
    v(parts) { objPositions.push(parts.map(parseFloat)); },
    vn(parts) { objNormals.push(parts.map(parseFloat)); },
    vt(parts) { objTexcoords.push(parts.map(parseFloat)); },
    f(parts) {
        const numTriangles = parts.length - 2;
        for (let tri = 0; tri < numTriangles; ++tri) {
            addVertex(parts[0]);
            addVertex(parts[tri + 1]);
            addVertex(parts[tri + 2]);
        }
    },
};`;

  parseObj = `
function parseOBJ(text) {

// Array per memorizzare i dati grezzi degli .OBJ.
  const objPositions = [[0, 0, 0]];
  const objTexcoords = [[0, 0]];
  const objNormals = [[0, 0, 0]];

  const objVertexData = [objPositions, objTexcoords, objNormals];
`;

  addVertex = `
  // Elabora un indice di vertice nel formato .OBJ e aggiunge i dati corrispondenti a webglVertexData.
  function addVertex(vert) {
    const ptn = vert.split("/");
    ptn.forEach((objIndexStr, i) => {
      if (!objIndexStr) {
        return;
      }
      const objIndex = parseInt(objIndexStr);
      const index = objIndex + (objIndex >= 0 ? 0 : objVertexData[i].length);
      webglVertexData[i].push(...objVertexData[i][index]);
    });
  }

  const keywords = {
    v(parts) {
      objPositions.push(parts.map(parseFloat));
    },
    vn(parts) {
      objNormals.push(parts.map(parseFloat));
    },
    vt(parts) {
      objTexcoords.push(parts.map(parseFloat));
    },
    f(parts) {
      const numTriangles = parts.length - 2;
      for (let tri = 0; tri < numTriangles; ++tri) {
        addVertex(parts[0]);
        addVertex(parts[tri + 1]);
        addVertex(parts[tri + 2]);
      }
    },
  };    `;
}
