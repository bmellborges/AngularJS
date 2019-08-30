import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  // @Input() usuarios:Usuario[] = []

  constructor(
    public usuarioService: UsuarioService,
    protected router:Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(form);
    this.usuarioService.save(this.usuario);
    this.usuario = new Usuario;
    console.log(this.usuario, this.usuarioService.usuarios);
    form.reset();
    this.router.navigate(["/"]);
  }

}
