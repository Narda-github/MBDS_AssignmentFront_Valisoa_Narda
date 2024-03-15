import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    pseudo: new FormControl(''),
    mdp: new FormControl(''),
  });

 // token = undefined;
  constructor(
    private loginService : LoginService,
    private router:Router
  ) {}

  login(){
    console.log("login !");
    let user ={
      "pseudo" : this.loginForm.value.pseudo,
      "mdp": this.loginForm.value.mdp
    }
    console.log("pseudo ",this.loginForm.value.pseudo);
    /*this.loginService
    .loginIn(user)
    .subscribe((reponse:any) => {
      console.log(reponse);
      //this.token = reponse['token'];
      this.router.navigate(['/home']);
      
    });*/
    this.router.navigate(['/home']);
  }
  onSubmit(){
    this.login();
  }
}
