import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ProjectionComponent } from './pages/projection/projection.component';
import { VertexFragmentComponent } from './components/vertex-fragment/vertex-fragment.component';
import { ObjLoaderComponent } from './components/obj-loader/obj-loader.component';
import { UserExperienceComponent } from './pages/user-experience/user-experience.component';

export const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'User-Experience', component: UserExperienceComponent },

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
