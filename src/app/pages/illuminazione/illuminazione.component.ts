import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { SectionComponent } from '../../components/section/section.component';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { LinkComponent } from '../../components/link/link.component';

@Component({
  selector: 'app-illuminazione',
  standalone: true,
  imports: [
    PageTitleComponent,
    SectionComponent,
    DashboardComponent,
    LinkComponent,
  ],
  templateUrl: './illuminazione.component.html',
  styleUrl: './illuminazione.component.css',
})
export class IlluminazioneComponent {
  normalizeVector = `      
  vec3 N = normalize(v_normal);
  vec3 L = normalize(lightPos - vertPos);`;

  diffuseLighting = `
  vec3 R = reflect(-L, N);      
  vec3 V = normalize(-vertPos);
  float specAngle = max(dot(R, V), 0.0);
  specularLight = pow(specAngle, shininessAmbient);`;

  textureMapping = `    
    // Leggi la mappa di diffusione e combina con il colore dell'oggetto
    vec4 diffuseMapColor = texture2D(diffuseMap, v_texcoord);
    vec3 effectiveDiffuse = diffuse * diffuseMapColor.rgb * v_color.rgb;

    // Leggi la mappa di specularità
    vec4 specularMapColor = texture2D(specularMap, v_texcoord);
    vec3 effectiveSpecular = specularMapColor.rgb * specularLight * specular;`;

  gl_FragColor = `
  gl_FragColor = vec4(
    Ka * ambient + 
    Kd * lambertian * effectiveDiffuse + 
    Ks * effectiveSpecular + emissive, 
    diffuseMapColor.a * v_color.a * opacity 
  );`;
}
