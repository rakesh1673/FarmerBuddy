import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from './../../shared/services/toastr.service';
import { UserService } from './../../shared/services/user.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { User } from '../../shared/models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [EmailValidator]
})
export class LoginComponent implements OnInit {
  user = {
    emailId: '',
    loginPassword: ''
  }

  errorInUserCreate = false;
  errorMessage: any;
  createUser;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private afStore: AngularFirestore
  ) {
    this.createUser = new User();
  }

  ngOnInit(): void {
  }

  addUser(userForm: NgForm) {
    userForm.value['isAdmin'] = false;
    this.authService
      .createUserWithEmailAndPassword(
        userForm.value['emailId'],
        userForm.value['password']
      )
      .then((res) => {
        console.log(res);
        const user = {
          email: res.user.email,
          famil_name: res.user.displayName,
          uid: res.user.uid,
          verified_email: res.user.emailVerified,
          phoneNumber: res.user.phoneNumber,
          picture: res.user.photoURL
        };
        this.userService.createUser(user);
        console.log(user);
        this.toastrService.success('Resgistering', 'User Registration');
        setTimeout((router: Router) => {
          $('#createUserForm').modal('hide');
          this.router.navigate(['/']);
        }, 1500);
      })
      .catch((err) => {
        this.errorInUserCreate = true;
        this.errorMessage = err;
        this.toastrService.error('Error while Creating User', err);
      });
  }

  signInWithEmail(userForm: NgForm) {
    this.authService
      .signInRegular(userForm.value['emailId'], userForm.value['loginPassword'])
      .then((res) => {
        this.toastrService.success(
          'Authentication Success',
          'Logging in please wait'
        );
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        setTimeout((router: Router) => {
          this.router.navigate([returnUrl || '/']);
        }, 1500);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.toastrService.error(
          'Authentication Failed',
          'Invalid Credentials, Please Check your credentials'
        );
      });
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res) => {
        if(res.additionalUserInfo.isNewUser) {
          this.userService.createUser(res.additionalUserInfo.profile);
          this.toastrService.success(
            'Authentication Success',
            'Logging in please wait'
          );
        }
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        //location.reload();
        this.router.navigate([returnUrl || '/']);
      })
      .catch((err) => {
        this.toastrService.error('Error Occured', 'Please try again later');
      })
  }

  updateUser(user) {
    this.authService.signInWithGoogle()
    .then((res) => {
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        roles: {
          subscriber: true
        }
      };
      this.userService.createUser(data);
      this.toastrService.success('Resgistering', 'User Registration');
      setTimeout((router: Router) => {
        $('#createUserForm').modal('hide');
        this.router.navigate(['/']);
      }, 1500);
    })
    .catch((err) => {
      this.errorInUserCreate = true;
      this.errorMessage = err;
      this.toastrService.error('Error while Updating User', err);
    });
  }

}
