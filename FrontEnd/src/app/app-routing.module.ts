import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RegisterComponent } from './components/register/register.component';
import { TablaRankingComponent } from './components/tabla-ranking/tabla-ranking.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'tabla-ranking', component: TablaRankingComponent },
  { path: 'line-chart', component: LineChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
