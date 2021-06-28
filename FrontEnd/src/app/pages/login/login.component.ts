import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { IniciosesionService  } from 'src/app/shared/services/iniciosesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Boolean;
  error: Boolean;

  constructor(private user: IniciosesionService, 
              private router: Router) { 
    this.login = false;
    this.error = false;
    if(localStorage.getItem('uss_key') == 'zXyvVV_1') this.router.navigate(['Dashboard']);
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  

  onSubmit(user, email)
  {
    this.login = true;
    
    this.user.iniciar_sesion(user.value, email.value)
    .subscribe(
      (response)=>{
        console.log(JSON.stringify(response))
        var resp = JSON.parse(JSON.stringify(response));
        console.log(resp)
        if(resp.result === "1"){
          localStorage.setItem('uss_key','zXyvVV_1');
          this.router.navigate(['Dashboard']);
        }
        else {
          this.error = true;
          this.login = false;
        }
      }
    );
  }

}
