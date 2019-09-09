import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() public endereco: Endereco = new Endereco;

  constructor(
    protected enderecoService:EnderecoService
  ) { }

  ngOnInit() {
  }

  buscaCEP(){
    this.endereco = this.enderecoService.getEndereco(this.endereco.cep);
  }
}
