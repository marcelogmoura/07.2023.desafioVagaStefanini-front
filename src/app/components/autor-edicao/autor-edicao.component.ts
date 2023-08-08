import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-autor-edicao',
  templateUrl: './autor-edicao.component.html',
  styleUrls: ['./autor-edicao.component.css']
})
export class AutorEdicaoComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private HttpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
      let idAutor = this.activatedRoute.snapshot.paramMap.get('id') as string;

      this.HttpClient.get('http://localhost:8081/autor/' + idAutor)

        .subscribe({
          next: (data: any) => {
           // console.log(data);
            this.formEdicao.patchValue(data);

          },
          error: (e) =>{
            console.log(e);
          }
        })
  }

  formEdicao = new FormGroup({
    idAutor: new FormControl('' ),
    nome: new FormControl('' , [Validators.required]  ),
    sexo: new FormControl('' ),
    dataNascimento: new FormControl('' , [Validators.required]  ),
    email: new FormControl('' ),
    paisOrigem: new FormControl('' ),
    cpf: new FormControl('' ),
  });


  get form(): any {
    return this.formEdicao.controls;
  }


  onSubmit(): void {
    this.HttpClient.put('http://localhost:8081/autor' , this.formEdicao.value)
      .subscribe({
        next: (data: any) =>{
          this.mensagem = data.mensagem;
        },
        error: (e) =>{
          this.mensagem = e.error.mensagem;
        }
      })

  }
}
