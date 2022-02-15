import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: any = [];
  id: any = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://buildyobar.herokuapp.com/users/')
    .subscribe(res => {
      this.userDetails = res; 
      console.log(this.userDetails)
    }) 
  }


}
