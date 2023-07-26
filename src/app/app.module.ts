import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http'
import { IConfig} from 'ngx-mask' // ngx mask



import { AppComponent } from './app.component';
import { AutorCadastroComponent } from './components/autor-cadastro/autor-cadastro.component';
import { AutorConsultaComponent } from './components/autor-consulta/autor-consulta.component';
import { AutorEdicaoComponent } from './components/autor-edicao/autor-edicao.component';
import { ObraCadastroComponent } from './components/obra-cadastro/obra-cadastro.component';
import { ObraConsultaComponent } from './components/obra-consulta/obra-consulta.component';
import { ObraEdicaoComponent } from './components/obra-edicao/obra-edicao.component';

// ngx mask
const maskConfig: Partial<IConfig> = {
  validation: true, // ao salvar não ira manter a mascara
};


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'autor-cadastro' },

  { path: 'autor-cadastro' , component: AutorCadastroComponent } ,
  { path: 'autor-consulta' , component: AutorConsultaComponent } ,
  { path: 'autor-edicao/:id' , component: AutorEdicaoComponent } ,
  { path: 'obra-cadastro' , component: ObraCadastroComponent } ,
  { path: 'obra-consulta' , component: ObraConsultaComponent} ,
  { path: 'obra-edicao/:id' , component: ObraEdicaoComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    AutorCadastroComponent,
    AutorConsultaComponent,
    AutorEdicaoComponent,
    ObraCadastroComponent,
    ObraConsultaComponent,
    ObraEdicaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
