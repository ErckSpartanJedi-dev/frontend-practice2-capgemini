import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public result : any;

  constructor(private servicio : ServiceService) {

  }

  public enviar(formulario : any) : any {
    console.log(formulario.value);
    this.servicio.result(formulario.value)
    .subscribe((resp: any) => {
      this.result = resp;
    })
  }

}
