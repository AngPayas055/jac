import { Injectable, Output, EventEmitter } from '@angular/core';
import { UserLoginModel } from '../../app/models/user-login.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppSettings } from '../settings/app.settings';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() getCurrentUser: EventEmitter<any> = new EventEmitter();
  
  private apiURI: string  = new AppSettings().getApiUrl();    
  public loginSource = new Subject<[boolean, string]>();
  public loginObservable = this.loginSource.asObservable();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    ) { 
      this.getCurrentUser.emit(localStorage.getItem('email'));
    }

    public login(loginUser: UserLoginModel): void {
      let url = this.apiURI + "/login";
      let body = "email=" + loginUser.email + "&password=" + loginUser.password;
      let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  
      this.httpClient.post(url, body, options).subscribe(
        response => {
          localStorage.setItem('email', loginUser.email);
          localStorage.setItem('token', response["token"]);
          
          this.loginSource.next([true, "Login successful."]);
          
          this.getCurrentUser.emit(loginUser.email);
  
          // this.router.navigate(['/']);
        },
        error => {
          this.loginSource.next([false, error["error"].error_description]);
        });
    }

    public logout(): any {
      return new Observable(observer => {
        let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' + localStorage.getItem('token') }) };
        console.log(options)
        this.httpClient.get(this.apiURI + "/logout", options).subscribe(
          data => {
            console.log(data)
            observer.next(data);
            observer.complete();
          },
          error => {
            localStorage.setItem('email', "");
            localStorage.setItem('token', "");
            localStorage.setItem('user_rights', "");
            localStorage.setItem('user_type', "");
            localStorage.setItem('name', "");
        
            this.getCurrentUser.emit("");
      
            this.router.navigate(['/']);
      
            observer.next(error);
            observer.complete();
          }
        );
        
        
        this.toastr.success("Logged Out")
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 500);
        

      });
  }

}
