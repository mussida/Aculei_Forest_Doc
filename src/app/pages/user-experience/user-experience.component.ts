import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { SectionComponent } from '../../components/section/section.component';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

@Component({
  selector: 'app-user-experience',
  standalone: true,
  imports: [
    PageTitleComponent,
    SectionComponent,
    DashboardComponent,
    SectionTitleComponent,
  ],
  templateUrl: './user-experience.component.html',
  styleUrl: './user-experience.component.css',
})
export class UserExperienceComponent {
  mouseMove = `
    canvas.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;

      if (phi + dy * 0.01 <= Math.PI / 2 - 0.1 && phi + dy * 0.01 > 0) {
        phi += dy * 0.01;
        phiTag.value = phi;
      }
      theta -= dx * 0.01;
      thetaTag.value = theta;

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }
  });`;
  mouseZoom = `  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const zoomSpeed = 0.2;
      if (
        distance - e.deltaY * zoomSpeed > 7 &&
        distance - e.deltaY * zoomSpeed < 40
      ) {
        distance -= e.deltaY * zoomSpeed;
        distanceTag.value = distance;
      }
    },
    { passive: false }
  );`;
}
