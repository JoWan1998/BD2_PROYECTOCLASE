import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor(private http: HttpClient) { }

  lineChartData: ChartDataSets[] = [{ data: [], label: '' , borderColor: 'rgba(10, 115, 163, 0)' , backgroundColor: 'rgba(10, 115, 163, 0)'}];

  getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  ngOnInit(): void {
    const headers = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Accept': 'application/json'};
    this.http.get('http://190.115.3.155:16000/ranking', { headers }).subscribe(data => {
      let ranking = JSON.parse(JSON.stringify(data));
      //let articulos = [];
      let objetos = []
      for (let i = 0; i < ranking.length; i++) {
        
        let object = [];

        if(ranking[i]["2020-05-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-05-31"]);

        if(ranking[i]["2020-06-30"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-06-30"]);

        if(ranking[i]["2020-07-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-07-31"]);
        
        if(ranking[i]["2020-08-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-08-31"]);

        if(ranking[i]["2020-09-30"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-09-30"]);

        if(ranking[i]["2020-10-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-10-31"]);

        if(ranking[i]["2020-11-30"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-11-30"]);

        if(ranking[i]["2020-12-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2020-12-31"]);

        if(ranking[i]["2021-01-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2021-01-31"]);
          
        if(ranking[i]["2021-02-28"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2021-02-28"]);

        if(ranking[i]["2021-03-31"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2021-03-31"]);

        if(ranking[i]["2021-04-30"] === null)
          object.push(0);
        else
          object.push(ranking[i]["2021-04-30"]);
        
        this.lineChartData.push({ data: [object[0],object[1],object[2],object[3],object[4],object[5],object[6],object[7],object[8],object[9],object[10],object[11],object[12]], label: ranking[i]["Banco"] , borderColor: this.getRandomRgb() , backgroundColor: 'rgba(10, 115, 163, 0)'})
      }
      //console.log(this.lineChartData);
    })

  }

  lineChartLabels: Label[] = ['mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'enero', 'febrero', 'marzo', 'abril'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(17, 137, 192, 1)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
