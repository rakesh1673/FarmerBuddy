import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Menu {
  title: '';
  url: '';
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private afs: AngularFirestore) { }

  getMenus() {
    return this.afs.collection('menus').snapshotChanges()
    .pipe(
      map( menu => {
        return menu.map( a => {
          const data = a.payload.doc.data() as Menu;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    );
  }

  getMenusById(id) {
    return this.afs.collection('menus').doc(id).valueChanges();
  }

  getConditionalMenus(field: string, condition: any, value: string) {
    return this.afs.collection('menus', ref => ref.where(field, condition, value)).snapshotChanges()
    .pipe(
      map( menu => {
        return menu.map( a => {
          const data = a.payload.doc.data() as Menu;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    );
  }

  addMenu(menu: Menu) {
    this.afs.collection('menus').add(menu);
  }

  updateMenu(menuId, menu: Menu) {
    this.afs.doc('menus/' + menuId).update(menu);
  }

  deleteMenu(menuId) {
    this.afs.doc('menus/' + menuId).delete();
  }
}
