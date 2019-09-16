import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
  protected produto: Produto = new Produto
  private id: string = null;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router,
    protected activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.get(this.id).subscribe(
        res => {
          this.produto = res;
        }
      )
    }
  }

  onsubmit(form) {
    console.log(form);
    try {
      if (this.id) {
        this.produtoService.update(this.produto, this.id).then(
          res => {
            //console.log(res);
            this.produto = new Produto;
            form.reset();
            this.router.navigate(["/"]);
            Swal.fire("Atualizado!")
          },
          err => {
            //console.log(err);
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Erro ao atualizar o produto!\nVerifique os dados!',
            })
          }
        )
      } else {
          this.produtoService.save(this.produto).then(
            res => {
              console.log(res);
              this.produto = new Produto;
              form.reset();
              this.router.navigate(["/"]);
              Swal.fire("Cadastrado!")
            },
            err => {
              console.log(err);
              Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Erro ao cadastrar o produto!\nVerifique os dados!',
              })
            }
          )
        }
      }catch (e) {
        Swal.fire({
          type: 'warning',
          title: 'Oops...',
          text: 'Algo deu errado ao acessar a base de dados.',
          footer: '<a href="/">Ligue para nosso suporte ?</a>'
        })
      }
    }
}
