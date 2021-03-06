import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { FileuploadComponent } from './fileupload/fileupload.component';

import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ForbiddenNameDirective,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
