import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-oncommon-page',
  templateUrl: './oncommon-page.component.html',
  styleUrl: './oncommon-page.component.css'
})
export class OncommonPageComponent {
  //i18nSelect para cambiar palabras 
  public name: string = 'samuel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeName(): void {
    this.name = 'Fernanda';
    this.gender = 'female';
  }


  //pip i18nPlural
  public clients: string[] = ['andres', 'david', 'fer', 'marcos'];
  public clientMap = {
    '=0': 'No tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyvalue
  public person = {
    name: 'Samu',
    apellido: 'Cabrera'
  }

  //async pipe
  public observableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value))
  )
}
