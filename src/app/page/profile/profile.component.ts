import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  public myUser: User;

  constructor()
  {
    this.myUser = new User("FulMen","Fulanito","Mengano","fulanito.mengano@gmail.com","https://th.bing.com/th/id/OIG.XQbFRphxzHhe3CvwsGNZ?w=1024&h=1024&rs=1&pid=ImgDetMain","soyFulanito");
  }

  public userCompleto(): string
  {
      return this.myUser.name + " " + this.myUser.last_name;
  }

  modificarDatos(nuevoNombre: string, nuevoApellido: string, nuevoEmail: string, nuevaFoto: string): void {
    this.myUser.name = nuevoNombre;
    this.myUser.last_name = nuevoApellido;
    this.myUser.email = nuevoEmail;
    this.myUser.photo = nuevaFoto;
console.log(this.myUser.photo)
}
ngOnInit(): void {  
}
}
