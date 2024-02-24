import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'; 

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y rutas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'products/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'products/uncommon'
          },
        ]
      },
      {
        label: 'Pipes perdonalizados',
        icon: 'pi pi-cog', 
        items: [
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog', 
            routerLink: 'products/custom'
          }
        ]
      }
    ]
  }
}
