import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BooksComponent } from './page/books/books.component';
import { UpdateBookComponent } from './page/update-book/update-book.component';
import { AddBookComponent } from './page/add-book/add-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path:"profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "update-book", component: UpdateBookComponent},
  {path: "add-book", component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
