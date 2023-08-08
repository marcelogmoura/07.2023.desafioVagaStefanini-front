import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obra-edicao',
  templateUrl: './obra-edicao.component.html',
  styleUrls: ['./obra-edicao.component.css']
})
export class ObraEdicaoComponent implements OnInit {

  autores: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  formEdicao = new FormGroup({
    idAutor: new FormControl(),
    nome: new FormControl(),
    descricao: new FormControl(),
    dataPublicacao: new FormControl(),
    dataExposicao: new FormControl()
  });

  get form(): any {
    return this.formEdicao.controls;
  }




  ngOnInit(): void {

    let idObra = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get('http://localhost:8081/obra/' + idObra)
      .subscribe({
        next: (data) => {
          this.autores = data as any[];
        },
        error: (e) => {
          console.log(e);
        }
      })
  }


  onSubmit(): void {

    this.httpClient.put('http://localhost:8081/obra' , this.formEdicao.value)
         .subscribe({
        next: (data: any) =>{
          this.mensagem = data.mensagem;
        },
        error: (e) =>{
          this.mensagem = e.error.mensagem;
        }
      })

  }

  onDelete(idObra: number): void {
    if(window.confirm('Excluir a Obra selecionada?')){
      this.httpClient.delete('http://localhost:8081/obra/' + idObra)
        .subscribe({
          next: (data: any) => {
            this.mensagem = data.mensagem;
            this.ngOnInit();
          },
          error: (e) => {
            this.mensagem = e.error.mensagem;
          }
        })

    }

  }

}
