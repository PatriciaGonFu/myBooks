import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myUser: User;
  nuevoNombre: string;
  nuevoApellido: string;
  nuevoEmail: string;
  nuevaFoto: string;
  nuevaPassword: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.myUser = this.userService.user;
  }

  modificarDatos(): void {
    console.log('Datos a modificar:', this.nuevoNombre, this.nuevoApellido, this.nuevoEmail, this.nuevaFoto, this.nuevaPassword);
    
    this.userService.putUsuarios(this.myUser.id_user, this.nuevoNombre, this.nuevoApellido, this.nuevoEmail, this.nuevaFoto, this.nuevaPassword)
      .subscribe((response: any) => {
        console.log(response);
        this.myUser.name = this.nuevoNombre;
        this.myUser.last_name = this.nuevoApellido;
        this.myUser.email = this.nuevoEmail;
        this.myUser.photo = this.nuevaFoto;
        this.myUser.password = this.nuevaPassword;

        alert('Los datos se han modificado correctamente')
      });
  }
}

