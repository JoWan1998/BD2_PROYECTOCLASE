import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { InstitucionesService } from 'src/app/shared/services/instituciones.service';

@Component({
  selector: 'app-ranking-chart',
  templateUrl: './ranking-chart.component.html',
  styleUrls: ['./ranking-chart.component.css']
})
export class RankingChartComponent implements OnInit {

  @Input() no: string;

  lineChartData: ChartDataSets[] = [{ data: [], label: '' , borderColor: 'rgba(10, 115, 163, 0)' , backgroundColor: 'rgba(10, 115, 163, 0)'}];
  lineChartLabels: Label[] = ['mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'enero', 'febrero', 'marzo', 'abril'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private institut: InstitucionesService) { 
   
  }

  ngOnInit() {
    let object = [];
    let dato = this.institut.GetInfo().subscribe(
      (data) => {
        let ranking = JSON.parse(JSON.stringify(data));
        let value = -1;
        for (let i = 0; i < ranking.length; i++) {
          if(ranking[i].Banco === this.no) 
          {
            value = i
            break;
          }
        }
        
        if(value!= -1)
        {
          if(ranking[value]["2020-05-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-05-31"]);

        if(ranking[value]["2020-06-30"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-06-30"]);

        if(ranking[value]["2020-07-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-07-31"]);
        
        if(ranking[value]["2020-08-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-08-31"]);

        if(ranking[value]["2020-09-30"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-09-30"]);

        if(ranking[value]["2020-10-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-10-31"]);

        if(ranking[value]["2020-11-30"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-11-30"]);

        if(ranking[value]["2020-12-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2020-12-31"]);

        if(ranking[value]["2021-01-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2021-01-31"]);
          
        if(ranking[value]["2021-02-28"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2021-02-28"]);

        if(ranking[value]["2021-03-31"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2021-03-31"]);

        if(ranking[value]["2021-04-30"] === null)
          object.push(0);
        else
          object.push(ranking[value]["2021-04-30"]);

        console.log(object)
        this.lineChartData.push({ data: [object[0],object[1],object[2],object[3],object[4],object[5],object[6],object[7],object[8],object[9],object[10],object[11],object[12]], label: ranking[value]["Banco"] , borderColor: this.getRandomRgb() , backgroundColor: 'rgba(10, 115, 163, 0)'})

        }
      });
  }

  getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

}
