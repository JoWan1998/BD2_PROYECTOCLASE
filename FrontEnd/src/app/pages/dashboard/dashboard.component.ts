import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { InstitucionesService } from 'src/app/shared/services/instituciones.service';
import { institucion } from 'src/app/shared/models/institucion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    instituciones: institucion[];

  constructor(private breakpointObserver: BreakpointObserver, 
    private router: Router,
    private insti: InstitucionesService) { 
    if(localStorage.getItem("uss_key") == "v1_1vvXx") this.router.navigate(['']);
    this.instituciones = []
  }

  ngOnInit() {
    this.instituciones = this.insti.GetInstituciones();

  }

  out(){
    localStorage.setItem("uss_key", "v1_1vvXx");
    this.router.navigate(['']);
  }

}
