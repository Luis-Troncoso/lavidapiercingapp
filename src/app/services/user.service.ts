import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  // Obtener datos del usuario por UID
  getUser(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  // actualizar datos del usuario
  updateUser(uid: string, data: User) : Promise<any> {
    return this.firestore.collection('users').doc(uid).update(data);
  }

  //subir foto de perfil
  uploadProfilePicture(uid: string, profilePicture: string) : Promise<any> {
    return this.firestore.collection('users').doc(uid).update({ profilePicture});
  }
}
