import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  text = input<string>();
  link = input<string>();
}
