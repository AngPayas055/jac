import { Injectable, Output, EventEmitter } from '@angular/core';
import { UserLoginModel } from '../../app/models/user-login.model';
import { Register } from '../../app/models/register.model';
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

    registerUser(RegisterModel: Register): Observable<any> {  
      let url = this.apiURI + "/register";
      // let body = "email=" + loginUser.email + "&password=" + loginUser.password;
      let options = { headers: new HttpHeaders({ 
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'application/json',
      }) };

      return new Observable<any>((observer) => {
          this.httpClient.post(url, RegisterModel, options).subscribe(response => {
              observer.next(response)
              observer.complete()
          }, err => {
              observer.next(err)
              observer.complete()
          })
      })
    }

    public login(loginUser: UserLoginModel): void {
      let url = this.apiURI + "/login";
      let body = "email=" + loginUser.email + "&password=" + loginUser.password;
      let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  
      this.httpClient.post(url, body, options).subscribe(
        response => {
          localStorage.setItem('email', loginUser.email);
          localStorage.setItem('token', response["token"]);
          localStorage.setItem('name', response["name"]);
          localStorage.setItem('id', response["id"]);
          
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
        this.httpClient.get(this.apiURI + "/logout", options).subscribe(
          data => {
            observer.next(data);
            observer.complete();
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('token_type');
            localStorage.removeItem('username');
            localStorage.removeItem('userRights');
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('name');
            localStorage.removeItem('id');
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
