import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autor-consulta',
  templateUrl: './autor-consulta.component.html',
  styleUrls: ['./autor-consulta.component.css']
})
export class AutorConsultaComponent implements OnInit {

  autores: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {
  }

ngOnInit(): void {

  this.httpClient.get('http://localhost:8081/autor')
    .subscribe({
      next: (data) => {
        this.autores = data as any[];
      },
      error: (e) => {
        console.log(e);
      }
    })
}

  onDelete(idAutor: number): void {
    if(window.confirm('Excluir o Autor selecionado?')){
      this.httpClient.delete('http://localhost:8081/autor/' + idAutor)
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
