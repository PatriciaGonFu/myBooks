import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public user: User = new User(0, '', '', '', '', '', ''); 

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.error('Formulario no válido');
      return;
    }

    this.userService.postLogin(this.user).subscribe(
      (response: any) => {
        console.log('Sesión iniciada:', response);
        this.userService.logueado = true;
        this.userService.user = response.user;

        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error('Error en inicio de sesión:', error);
      }
    );
  }

  ngOnInit(): void {}
}