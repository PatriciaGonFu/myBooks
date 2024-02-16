import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User = new User(0, '', '', '', '', '', ''); 

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.error('Formulario inválido');
      return;
    }

    this.userService.postLogin(this.user).subscribe(
      (response: User) => { 
        console.log('Sesión iniciada:', response);
        this.userService.logueado = true;
        this.userService.user = response;
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error('Error en inicio de sesión:', error);
      }
    );
  }
}
