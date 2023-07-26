import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-autor-cadastro',
  templateUrl: './autor-cadastro.component.html',
  styleUrls: ['./autor-cadastro.component.css']
})
export class AutorCadastroComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ){
  }

  formCadastro = new FormGroup({

    nome: new FormControl(''   ),
    sexo: new FormControl('' ),
    dataNascimento: new FormControl(''  ),
    email: new FormControl('' ),
    paisOrigem: new FormControl('' ),
    cpf: new FormControl('' ),
  });

  get form():any {
    return this.formCadastro.controls;
  }

  // http://localhost:8081/autor

  onSubmit(): void {
   // console.log(this.formCadastro.value);
    this.httpClient.post('http://localhost:8081/autor' , this.formCadastro.value)
      .subscribe({
        next: (data: any) => {
          //console.log(data);
          this.mensagem = data.mensagem;
          this.formCadastro.reset();
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }




}
