import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-obra-cadastro',
  templateUrl: './obra-cadastro.component.html',
  styleUrls: ['./obra-cadastro.component.css']
})
export class ObraCadastroComponent implements OnInit{

  autores: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  formCadastro = new FormGroup({
    idAutor: new FormControl(),
    nome: new FormControl(),
    descricao: new FormControl(),
    dataPublicacao: new FormControl(),
    dataExposicao: new FormControl()
  });

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8081/autor')
      .subscribe({
        next: (data) => {
          this.autores = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }
      });
  }

  get form(): any {
    return this.formCadastro.controls;
  }


  onSubmit(): void {
    this.httpClient.post('http://localhost:8081/obra' , this.formCadastro.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.mensagem;
          this.formCadastro.reset();
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      })
  }

}
