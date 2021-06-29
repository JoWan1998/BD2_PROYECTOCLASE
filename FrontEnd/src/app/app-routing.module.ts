import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisisBancariosComponent } from './pages/dashboard/analisis-bancarios/analisis-bancarios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentationComponent } from './pages/dashboard/documentation/documentation.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ReportesComponent } from './pages/dashboard/reportes/reportes.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { TablaRankingComponent } from './components/tabla-ranking/tabla-ranking.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'Home' },
    { path: 'Home', component: HomeComponent },
    { path: 'Reportes', component: ReportesComponent },
    { path: 'Documentation', component: DocumentationComponent},
    { path: ':id', component: AnalisisBancariosComponent }    
  ]},
  { path: 'Register', component: RegisterComponent },
  { path: 'tabla-ranking', component: TablaRankingComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
