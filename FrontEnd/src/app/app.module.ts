import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModuleModule } from "./modules/material-module/material-module.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TablaRankingComponent } from './components/tabla-ranking/tabla-ranking.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { CardPercentValueComponent } from './components/card-percent-value/card-percent-value.component';
import { ReportesComponent } from './pages/dashboard/reportes/reportes.component';
import { DocumentationComponent } from './pages/dashboard/documentation/documentation.component';
import { AnalisisBancariosComponent } from './pages/dashboard/analisis-bancarios/analisis-bancarios.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CardLiquidezComponent } from './components/card-liquidez/card-liquidez.component';
import { CardSolvenciaComponent } from './components/card-solvencia/card-solvencia.component';
import { CardCalidadActivosComponent } from './components/card-calidad-activos/card-calidad-activos.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardBancoComponent } from './components/card-banco/card-banco.component';
import { RankingChartComponent } from './components/ranking-chart/ranking-chart.component';
import { CardDatoComponent } from './components/card-dato/card-dato.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TablaRankingComponent,
    LoginComponent,
    LineChartComponent,
    DashboardComponent,
    HomeComponent,
    CardPercentValueComponent,
    ReportesComponent,
    DocumentationComponent,
    AnalisisBancariosComponent,
    NotfoundComponent,
    CardLiquidezComponent,
    CardSolvenciaComponent,
    CardCalidadActivosComponent,
    CardBancoComponent,
    RankingChartComponent,
    CardDatoComponent
  ],
  imports: [
    ChartsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    NgbModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
