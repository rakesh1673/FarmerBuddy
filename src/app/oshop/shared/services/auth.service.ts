import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { filter, map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

export const ANONYMOUS_USER: User = new User();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  // userGoogle$: Observable<UserGoogle>;

  private subject = new BehaviorSubject<User>(undefined);

  user$: Observable<User> = this.subject.asObservable()
    .pipe(filter((user) => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(
    map((user) => !!user.$key)
  );

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(
    map((isLoggedIn) => !isLoggedIn)
  );

  isAdmin$: Observable<boolean> = this.user$.pipe(
    map((user) => !user.isAdmin)
  );

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService,
    private afStore: AngularFirestore
  ) {
    this.user = afAuth.authState;

    this.user.subscribe((user) => {
      console.log({ user });
      if(user) {
        this.userService.getUsers()
          .snapshotChanges()
          .subscribe((data) => {
            console.log({ data })
            if(!data.length) {
              this.subject.next(ANONYMOUS_USER);
              return;
            }

            data.forEach((el) => {
              const x: any = el.payload.val()
              console.log({x});
              const y: any = el.payload.toJSON();
              console.log({ y });
              this.subject.next({
                $key: y.uid || y.id,
                userName: user.displayName || user.email,
                emailId: y.email,
                phoneNumber: user.phoneNumber,
                avatar: user.photoURL,
                isAdmin: y.isAdmin,
                roles: {
                  subscriber: true
                }
              });
            });
          });
      } else {
          this.subject.next(ANONYMOUS_USER);
      }
    });

  }

  logout() {
    this.afAuth.signOut().then((res) => {
      this.subject.next(ANONYMOUS_USER);
      this.router.navigate(['/']);
    });
  }

  createUserWithEmailAndPassword(emailId: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(emailId, password);
  }

  signInRegular(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
