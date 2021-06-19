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
  columnas: string[] = ['perfil', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'enero', 'febrero', 'marzo'];
  constructor() { }

  ngOnInit(): void {
  }

  datos: Articulo[] = [new Articulo('Banrural', 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000),
  new Articulo('manzanas', 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000),
  new Articulo('naranjas', 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000),
  ];

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
