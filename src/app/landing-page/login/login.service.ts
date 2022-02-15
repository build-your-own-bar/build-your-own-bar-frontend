import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private http: HttpClient) {}

    signup(username: string, email: string, password: string) {
        return this.http.post('https://buildyobar.herokuapp.com/users/', 
            {
            username: username,
            email: email,
            password: password,
            }
        );
    }
}