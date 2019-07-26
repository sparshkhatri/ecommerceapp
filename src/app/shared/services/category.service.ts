import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    let categories = this.db.list('/categories', ref => ref.orderByChild('name'));
    return categories;
  }
}
