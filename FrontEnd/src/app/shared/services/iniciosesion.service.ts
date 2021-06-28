import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {

  constructor(private http: HttpClient) { }

  iniciar_sesion(email:String , password:String)
  {
    return this.http.post('http://190.115.3.155:16000/checkuser', { nombre: '', email: email, pass: password }
        );
  }
}
