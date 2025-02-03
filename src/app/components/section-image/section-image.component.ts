import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-image',
  standalone: true,
  imports: [],
  templateUrl: './section-image.component.html',
  styleUrl: './section-image.component.css',
})
export class SectionImageComponent {
  url = input<string>();
  caption = input<string>();
}
