import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  public result(data : any) : any {
    console.log("Desde el servicio", data);
    return this.http.post("http://localhost:8080/calculo", data);
  }
}
