import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  mail: string;
  constructor(private toastr: ToastrService, private http: HttpClient) { }

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

    this.http.post('http://190.115.3.155:16000/adduser', { nombre: this.username, email: this.mail, pass: this.password}).subscribe(data => {
        console.log(data);
        this.toastr.success('El Usuario a sido Creado', 'Correcto', {
          timeOut: 3000,
        });
    })
  }

}