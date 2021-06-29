import { Component, OnInit, Input } from '@angular/core';
import { institucion } from 'src/app/shared/models/institucion';
import { InstitucionesService } from 'src/app/shared/services/instituciones.service';


@Component({
  selector: 'app-card-dato',
  templateUrl: './card-dato.component.html',
  styleUrls: ['./card-dato.component.css']
})
export class CardDatoComponent implements OnInit {

  @Input() place: number;
  @Input() banco: string;

  codigo: number;

  activo: number;
  pasivo: number;
  capital: number;

  constructor(private inst: InstitucionesService) {
    let instituciones =[];
    let value = this.inst.Getdata().subscribe(
      (data)=>{
        let datito = JSON.parse(JSON.stringify(data));
        this.inst.GetInst().subscribe(
          (datos) =>{
            var data = JSON.parse(JSON.stringify(datos));
            data.forEach(
              (datitos)=>{
                if(datitos.nombre == this.banco) {
                  datito.forEach(element => {
                    if(element.institucion == datitos.codigo){
                      if(element.periodo == 13) {
                        this.activo = element.activo
                        this.pasivo = element.pasivo
                        this.capital = element.capital
                      }
                    }
                  });
                }
              }
            )
          }
        );
        
      }
    )
  }

  ngOnInit(): void {
  }

}
