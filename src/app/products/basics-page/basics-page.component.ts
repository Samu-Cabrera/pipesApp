import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameUpperCase: string = 'samu';
  public nameLowerCase: string = 'melgarejo';
  public nameTitleCase: string = 'cabrera';

  public customDate: Date = new Date();

}
