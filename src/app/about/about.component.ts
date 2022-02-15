import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'template_rb90ig4', e.target as HTMLFormElement, 'user_PofRZkLPXasmqhS4pA0zj')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
