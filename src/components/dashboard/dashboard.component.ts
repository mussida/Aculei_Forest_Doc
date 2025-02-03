import { Component, input } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';
import { Section } from '../../app/app.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule,
    RouterOutlet,
    SidebarMobileComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  animations: [],
})
export class DashboardComponent {
  sections = input<Section[]>([]);
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
