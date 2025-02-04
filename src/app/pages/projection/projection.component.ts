import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-projection',
  standalone: true,
  imports: [RouterOutlet, PageTitleComponent, SectionComponent, RouterLink],
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.css',
})
export class ProjectionComponent {
  isChildRouteActive = false;
  private routeSub: Subscription | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Iscriviti ai cambiamenti di routing per rilevare se la route principale è attiva o se una figlia è selezionata
    this.routeSub = this.router.events.subscribe(() => {
      this.checkIfChildRouteIsActive();
    });
  }

  ngOnDestroy() {
    // Annulla l'iscrizione quando il componente viene distrutto
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  private checkIfChildRouteIsActive() {
    const childRoute = this.router.url.split('/').pop();
    // Se la route è una delle rotte figlie, disabilita il contenuto extra
    this.isChildRouteActive =
      childRoute === 'Vertex-fragment' || childRoute === 'Obj-Loader';
  }

  onActivate(event: any) {
    // Se il componente figlio è attivato, disabilita il contenuto extra
    this.isChildRouteActive = true;
  }
}
