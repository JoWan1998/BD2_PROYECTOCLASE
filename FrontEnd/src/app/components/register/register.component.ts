import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  mail: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  register() {
    if(this.username === undefined)
      this.toastr.error('Falta el campo Username', 'Error', {
        timeOut: 3000,
      });
    else if(this.mail === undefined)
      this.toastr.error('Falta el campo Email', 'Error', {
        timeOut: 3000,
      });
    else if(this.password === undefined)
      this.toastr.error('Falta el campo Password', 'Error', {
        timeOut: 3000,
      });
  }

}