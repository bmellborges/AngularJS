import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient,
    protected dbfire: AngularFireDatabase
  ) { }

  save(usuario: Usuario) {
    return this.dbfire.list("usuarios").push(usuario);
  }

  getAll() {
    return this.dbfire.list<Usuario>("usuarios").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
  get(key) {
    return this.dbfire.object<Usuario>("usuarios/" + key).valueChanges()
  }
  update(usuario: Usuario, key) {
    return this.dbfire.object<Usuario>("usuarios/" + key).update(usuario);
  }
}
