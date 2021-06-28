import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { InstitucionesService } from 'src/app/shared/services/instituciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  primerBank: string;
  segundBank: string;
  tercerBank: string;

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 3,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 3, rows: 2 },
        table: { cols: 3, rows: 4 },
      };
    })
  );

  instituciones = [];
  constructor(private breakpointObserver: BreakpointObserver, private insti: InstitucionesService) {
    this.instituciones = this.insti.GetInstituciones();
    let places = []
    this.insti.GetInfo().subscribe(
      (data)=>{
        let rank = JSON.parse(JSON.stringify(data));
        let objetos = [];
        this.instituciones.forEach((inst)=>{
          for (let i = 0; i < rank.length; i++) {
          
            let object = [];
            if(inst.institucion == rank[i].Banco){

              if(rank[i]["2020-05-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-05-31"]);
    
              if(rank[i]["2020-06-30"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-06-30"]);
    
              if(rank[i]["2020-07-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-07-31"]);
              
              if(rank[i]["2020-08-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-08-31"]);
    
              if(rank[i]["2020-09-30"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-09-30"]);
    
              if(rank[i]["2020-10-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-10-31"]);
    
              if(rank[i]["2020-11-30"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-11-30"]);
    
              if(rank[i]["2020-12-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2020-12-31"]);
    
              if(rank[i]["2021-01-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2021-01-31"]);
                
              if(rank[i]["2021-02-28"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2021-02-28"]);
    
              if(rank[i]["2021-03-31"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2021-03-31"]);
    
              if(rank[i]["2021-04-30"] === null)
                inst.activo.push(0);
              else
                inst.activo.push(rank[i]["2021-04-30"]);

              let sum = inst.activo.reduce((a, b) => a + b, 0)
              let cant = inst.activo.length;
              inst.promedio = sum/cant;
            }
          }
        })

        let anterior = 0;
        let primero = 0;
        let segundo = 0;
        let tercero = 0;
        
        this.instituciones.forEach((instituto)=>
        {
          if(instituto.promedio > anterior){
            anterior = instituto.promedio;
            this.primerBank = instituto.institucion;
          }
        })
        primero = anterior
        anterior = 0
        this.instituciones.forEach((instituto)=>
        {
          if(instituto.promedio > anterior && (instituto.promedio <= primero && instituto.institucion != this.primerBank)){
            anterior = instituto.promedio;
            this.segundBank = instituto.institucion;
          }
        })

        segundo = anterior
        anterior = 0
        this.instituciones.forEach((instituto)=>
        {
          if(instituto.promedio > anterior && (instituto.promedio <= primero && instituto.institucion != this.primerBank) && (instituto.promedio <= segundo && instituto.institucion != this.segundBank) ){
            anterior = instituto.promedio;
            this.tercerBank = instituto.institucion;
          }
        })

      }
    );

    
    
  }

  ngOnInit() {

  }
}
