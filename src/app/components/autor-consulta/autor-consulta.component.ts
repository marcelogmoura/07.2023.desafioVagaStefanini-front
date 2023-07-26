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

  paginaAtual = 1; // Página atual inicial
  itensPorPagina = 10; // Número de itens exibidos por página

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

  // mascara ok
  formatarCpf(cpf: string): string {
    const cpfFormatado = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return cpfFormatado;
  }


  get paginas(): number[] {
    const totalPaginas = Math.ceil(this.autores.length / this.itensPorPagina);
    return Array.from({ length: totalPaginas }, (_, index) => index + 1);
  }

    // Função para alterar a página atual
    alterarPagina(pagina: number): void {
      if (pagina >= 1 && pagina <= this.paginas.length) {
        this.paginaAtual = pagina;
      }
    }
  }



