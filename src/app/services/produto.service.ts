import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Produto } from '../model/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient,
    protected dbfire: AngularFireDatabase

  ) { }

  save(produto: Produto) {
    return this.dbfire.list("produtos").push(produto);
  }

  getAll() {
    return this.dbfire.list<Produto>("produtos").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
  get(key) {
    return this.dbfire.object<Produto>("produtos/" + key).valueChanges()
  }
  update(produto: Produto, key) {
    return this.dbfire.object<Produto>("produtos/" + key).update(produto);
  }
}
