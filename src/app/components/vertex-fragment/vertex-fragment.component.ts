import { Component } from '@angular/core';

@Component({
  selector: 'app-vertex-fragment',
  standalone: true,
  templateUrl: './vertex-fragment.component.html',
  styleUrl: './vertex-fragment.component.css',
})
export class VertexFragmentComponent {
  canvasCode = `
  const canvas = document.querySelector("#canvas");
  if (!canvas) {
      console.warn("Canvas non trovato, WebGL non inizializzato.");
      return;
  }

  const gl = canvas.getContext("webgl");

  if (!gl) {
      console.error("Errore: WebGL non supportato!");
      return;
  }
`;

  shaderVariables = `
    webglUtils.setBuffersAndAttributes(gl, meshProgramInfo, bufferInfo);
    webglUtils.setUniforms(meshProgramInfo, {}, material);
    webglUtils.drawBufferInfo(gl, bufferInfo);
    `;
}
