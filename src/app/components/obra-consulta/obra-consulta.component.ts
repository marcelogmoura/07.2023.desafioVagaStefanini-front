import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-obra-consulta',
  templateUrl: './obra-consulta.component.html',
  styleUrls: ['./obra-consulta.component.css']
})
export class ObraConsultaComponent {

  consultas: any[] = [];
  mensagem: string = '' ;

  constructor(
    private HttpClient: HttpClient
  ){
  }

  formConsulta = new FormGroup({
    dataInicio: new FormControl('' ) ,
    dataFim: new FormControl('' )
  });

  get form(): any {
    return this.formConsulta.controls;
  }

  onSubmit(): void {
    let dataInicio = this.formConsulta.value.dataInicio;
    let dataFim = this.formConsulta.value.dataFim;

    this.HttpClient.get('http://localhost:8081/obra/' + dataInicio +"/" + dataFim)
    .subscribe({
      next: (data) => {
        this.consultas = data as any[];

      },
      error: (e) => {
        console.log(e.error);
      }
    })

  }


  onDelete(idObra: number): void {
    if(window.confirm('Excluir a Obra selecionada?')){
      this.HttpClient.delete('http://localhost:8081/obra/' +idObra)
        .subscribe({
          next: (data: any) => {

          },
          error: (e) => {
            this.mensagem = e.error.mensagem;
          }
        })

    }


  }


}
