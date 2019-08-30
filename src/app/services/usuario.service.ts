import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Array<Usuario> = [
    { uid: "1", nome: "Ana", email: "ana@email.com", pws: "111111" },
    { uid: "2", nome: "Pedro", email: "pedro@email.com", pws: "222222" },
  ];

  constructor() { }

  save(usuario:Usuario){
    this.usuarios.push(usuario);
  }
  
}
