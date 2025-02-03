import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { SectionComponent } from '../../components/section/section.component';
import { LinkComponent } from '../../components/link/link.component';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { SectionImageComponent } from '../../components/section-image/section-image.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    PageTitleComponent,
    SectionComponent,
    LinkComponent,
    DashboardComponent,
    SectionTitleComponent,
    SectionImageComponent,
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {}
