import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  protected endereco: Endereco = new Endereco;

  constructor(
    protected http: HttpClient
  ) { }

  getEndereco(cep) {
    this.http.get<Endereco>("https://viacep.com.br/ws/" + cep + "/json/")
      .subscribe(
        res => {
          this.endereco = res;
          console.log(res);
        },
        erro => {
          this.endereco = null;
          console.log(erro);
        }
      )
    return this.endereco
  }

}