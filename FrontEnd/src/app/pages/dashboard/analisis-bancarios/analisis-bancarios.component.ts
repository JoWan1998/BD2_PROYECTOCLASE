import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { InstitucionesService } from 'src/app/shared/services/instituciones.service';
import { institucion } from 'src/app/shared/models/institucion';

@Component({
  selector: 'app-analisis-bancarios',
  templateUrl: './analisis-bancarios.component.html',
  styleUrls: ['./analisis-bancarios.component.css']
})
export class AnalisisBancariosComponent implements OnInit {
  

  name: any;
  id: any;

  
  institucion1: string;
  instituciones: institucion[];

  constructor(private breakpointObserver: BreakpointObserver, 
    private router: Router, 
    private route: ActivatedRoute,
    private instt: InstitucionesService) {}

  ngOnInit() {
    this.name = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
  }
  
}
