import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private Auth: AngularFireAuth,
    private Firestore: AngularFirestore,
  ) { }

  // Login
  Login(email: string, password: string) : Promise<any> {
    return this.Auth.signInWithEmailAndPassword(email, password);
  }

  // Register
  Register(user: User) : Promise<any> {
    return this.Auth.createUserWithEmailAndPassword(user.email, user.password)
    .then ((cred) => {
      return this.Firestore.collection('users').doc(cred.user?.uid).set({
        username: user.username,
        email: user.email,
        profilePicture: '',
        role: 'usuario',
      });
  });
  }

  // recuperar contraseña 
  recoverPassword(email: string) : Promise <void> {
    return this.Auth.sendPasswordResetEmail(email);
  }

  // Logout
  logout() : Promise<void> {
    return this.Auth.signOut();
  }

  //obtener el UID del usuario actual
  getUserId() : Promise<string | null> {
    return new Promise ((resolve,reject) => {
      this.Auth.onAuthStateChanged ((user) => {
        if (user) {
          resolve(user.uid);
        } else {
          resolve(null);
        }

    });
  });
  }

}


