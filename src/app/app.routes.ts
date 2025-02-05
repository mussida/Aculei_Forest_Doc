import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ProjectionComponent } from './pages/projection/projection.component';
import { VertexFragmentComponent } from './components/vertex-fragment/vertex-fragment.component';
import { ObjLoaderComponent } from './components/obj-loader/obj-loader.component';
import { UserExperienceComponent } from './pages/user-experience/user-experience.component';
import { IlluminazioneComponent } from './pages/illuminazione/illuminazione.component';

export const routes: Routes = [
  { path: '', component: IntroductionComponent, pathMatch: 'full' },
  { path: 'User-Experience', component: UserExperienceComponent },
  { path: 'Illuminazione', component: IlluminazioneComponent },
  {
    path: 'Proiezione',
    component: ProjectionComponent,
    children: [
      {
        path: 'Vertex-fragment',
        component: VertexFragmentComponent,
      },
      {
        path: 'Obj-Loader',
        component: ObjLoaderComponent,
      },
    ],
  },
];
