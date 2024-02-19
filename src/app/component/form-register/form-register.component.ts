import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  public user: User

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid || this.user.password !== this.user.confirmPassword) {
      console.error('Las contraseñas no coinciden o el formulario es inválido');
      return;
    }
  
    // Eliminamos confirmPassword del objeto user antes de enviarlo al backend
    delete this.user.confirmPassword;
  
    this.userService.postRegister(this.user).subscribe(
      (response: any) => {
        console.log('Usuario registrado correctamente:', response);
        alert('El usuario se ha registrado correctamente');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
  

  ngOnInit(): void { 
    this.user = new User(0, '', '', '', '', '', ''); // Inicializa el usuario con valores predeterminados
  }
}
