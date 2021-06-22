import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Articulo } from './Articulo';

@Component({
  selector: 'app-tabla-ranking',
  templateUrl: './tabla-ranking.component.html',
  styleUrls: ['./tabla-ranking.component.css']
})

export class TablaRankingComponent implements OnInit {
  columnas: string[] = ['perfil', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'enero', 'febrero', 'marzo', 'abril'];
  constructor(private http: HttpClient) { }
  datos: Articulo[] = [];

  ngOnInit(): void {
    const headers = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Accept': 'application/json'};
    this.http.get('http://190.115.3.155:16000/ranking', { headers }).subscribe(data => {
      let ranking = JSON.parse(JSON.stringify(data));
      //let articulos = [];
      let objetos = []
      for (let i = 0; i < ranking.length; i++) {
        
        let object = [];
        let promedio = 0;

        object.push(ranking[i]["Banco"]);

        if(ranking[i]["2020-05-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-05-31"]);
          promedio += ranking[i]["2020-05-31"];
        }

        if(ranking[i]["2020-06-30"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-06-30"]);
          promedio += ranking[i]["2020-06-30"];
        }

        if(ranking[i]["2020-07-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-07-31"]);
          promedio += ranking[i]["2020-07-31"];
        }
        
        if(ranking[i]["2020-08-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-08-31"]);
          promedio += ranking[i]["2020-08-31"];
        }

        if(ranking[i]["2020-09-30"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-09-30"]);
          promedio += ranking[i]["2020-09-30"];
        }

        if(ranking[i]["2020-10-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-10-31"]);
          promedio += ranking[i]["2020-10-31"];
        }

        if(ranking[i]["2020-11-30"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-11-30"]);
          promedio += ranking[i]["2020-11-30"];
        }

        if(ranking[i]["2020-12-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2020-12-31"]);
          promedio += ranking[i]["2020-12-31"];
        }

        if(ranking[i]["2021-01-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2021-01-31"]);
          promedio += ranking[i]["2021-01-31"];
        }
          
        if(ranking[i]["2021-02-28"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2021-02-28"]);
          promedio += ranking[i]["2021-02-28"];
        }

        if(ranking[i]["2021-03-31"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2021-03-31"]);
          promedio += ranking[i]["2021-03-31"];
        }

        if(ranking[i]["2021-04-30"] === null)
          object.push(0);
        else
        {
          object.push(ranking[i]["2021-04-30"]);
          promedio += ranking[i]["2021-04-30"];
        }
        
        if(promedio > 0)
          promedio = promedio / 12;
        
        objetos.push([promedio,object[0],object[1],object[2],object[3],object[4],object[5],object[6],object[7],object[8],object[9],object[10],object[11],object[12]]);        
      }
      objetos.sort(function(a, b){return b[0] - a[0]});
      for (let i = 0; i < objetos.length; i++) {
        let aux = objetos[i];
        this.datos.push(new Articulo(aux[1],aux[2],aux[3],aux[4],aux[5],aux[6],aux[7],aux[8],aux[9],aux[10],aux[11],aux[12], aux[13]));
      }
      //console.log(this.datos);
      this.tabla1.renderRows();
    })
  }



  articuloselect: Articulo = new Articulo("", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  @ViewChild(MatTable) tabla1: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    //this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.descripcion, this.articuloselect.precio));
    this.tabla1.renderRows();
    //this.articuloselect = new Articulo(0, "", 0);
  }

}
