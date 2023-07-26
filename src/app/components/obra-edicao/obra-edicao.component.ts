import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-obra-edicao',
  templateUrl: './obra-edicao.component.html',
  styleUrls: ['./obra-edicao.component.css']
})
export class ObraEdicaoComponent implements OnInit {

  autores: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8081/obra')
      .subscribe({
        next: (data) => {
          this.autores = data as any[];
        },
        error: (e) => {
          console.log(e);
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
