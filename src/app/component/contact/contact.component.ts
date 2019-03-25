import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailid:string;
  password:string;
  constructor() { }

  ngOnInit() {
  }

  formSubmitted(){
    console.log("email", this.emailid);
    
  }

}
