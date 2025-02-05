import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export interface Section {
  name: string;
  route: string;
  subsections: Subsection[];
}

export interface Subsection {
  name: string;
  route: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'doc';

  sections = [
    {
      name: 'Introduzione',
      route: '',
      subsections: [],
    },
    {
      name: 'User Experience',
      route: 'User-Experience',
      subsections: [],
    },
    {
      name: 'Illuminazione e Shading',
      route: 'Illuminazione',
      subsections: [],
    },
    {
      name: 'Proiezione prospettica modello 3D',
      route: 'Proiezione',
      subsections: [
        {
          name: 'Vertex e Fragment Shader',
          route: ['Proiezione', 'Vertex-fragment'],
        },
        {
          name: 'Caricamento di un file .OBJ',
          route: ['Proiezione', 'Obj-Loader'],
        },
      ],
    },
  ];
}
