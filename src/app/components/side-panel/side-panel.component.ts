import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'fm-side-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['side-panel.component.scss'],
  template: `
    <div class="flex-center logo">
      <h2 class="mt-3 mb-4  "> Fepi <span> Music </span> </h2>
    </div>

    <ng-container *ngFor="let menu of menus">
        <div class="menu mb-2"
          [routerLink]="menu.route"
          routerLinkActive="active">
          <div class="content">
            <span class="material-icons-outlined"> {{ menu.icon }} </span>
            <span> {{ menu.name }} </span>
          </div>
        </div>
    </ng-container>
  `
})
export class SidePanelComponent{

  protected menus = [
    {
      name: 'Minhas Musicas',
      icon: 'home',
      route: 'my-musics'
    },
    {
      name: 'Add Musicas',
      icon: 'add',
      route: 'add-musics'
    },
    {
      name: 'Listar Artistas',
      icon: 'mic',
      route: 'list-artists'
    }
  ]
}