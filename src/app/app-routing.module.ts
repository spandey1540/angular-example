import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components calls 
import { HomeComponent } from './component/home/home.component';
import { TodoComponent } from './component/todo/todo.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
