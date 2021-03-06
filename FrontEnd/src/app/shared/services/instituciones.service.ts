import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { institucion } from '../models/institucion';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {

  constructor(private http: HttpClient) { }


  GetInstituciones(){
    let instituciones: institucion[] = [];
    const headers = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Accept': 'application/json'};
    this.http.get('http://190.115.3.155:16000/InstitucionFinanciera', {headers}).subscribe(
      (datos) =>{
        var data = JSON.parse(JSON.stringify(datos));
        data.forEach(
          (datito)=>{
            let institucions: institucion = {
              codigo: datito.codigo,
              institucion: datito.nombre,
              url: '/Analisis/'+datito.codigo,
              promedio: 0,
              activo: []
            } 
            instituciones.push(institucions)
          }
        )
      }
    );
    return instituciones;
  }

  GetInst() {
    const headers = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Accept': 'application/json'};
    return this.http.get('http://190.115.3.155:16000/InstitucionFinanciera', {headers});
  }

  GetInfo() {
    const headers = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Accept': 'application/json'};
    return this.http.get('http://190.115.3.155:16000/ranking', { headers });    
  }

  Getdata(){
    const headers = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Accept': 'application/json'};
    return this.http.get('http://190.115.3.155:16000/PerfilFinanciero', { headers }); 
  }

}
