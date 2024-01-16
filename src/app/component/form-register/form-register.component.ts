import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  public user: User

  constructor()
  {this.user = new User('','','','','','','')}

  onSubmit(form:NgForm){
    if (form.invalid || this.user.password !== this.user.confirmPassword) {
      return;
    }
    console.log(form.value);
    console.log(this.user);
  }

  ngOnInit(): void { 
  }
}
