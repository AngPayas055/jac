import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from '../../models/user-login.model';
import { UserService } from '../../services/user.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authenticationSubscribe: any;

  public userLoginModel: UserLoginModel = {
    email: "",
    password: ""
  };

  constructor(    
    public authenticationService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  public snackBarHorizontalPosition: MatSnackBarHorizontalPosition = 'left';
  public snackBarVerticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public loginSubscribe: any;

  public login(): void {
    // let buttonLogin: Element = document.getElementById("buttonLogin");
    // buttonLogin.setAttribute("disabled", "disabled");

    if (this.userLoginModel.email === "" || this.userLoginModel.password === "") {
      this.toastr.warning("Please provide email and password.")
    } else {
      this.authenticationService.login(this.userLoginModel);
      this.authenticationSubscribe = this.authenticationService.loginObservable.subscribe(
        data => {
          let userType = localStorage.getItem('user_type');
          console.log(userType);
          if (data[0]) {
            this.toastr.success("Login successful.")
              setTimeout(() => {
                this.router.navigate(['/modules/dashboard']);
              }, 500);
            }
          // if (data[0]){
          //   console.log(data[0])
          //   this.toastr.success("Login successful.")
            // setTimeout(() => {
            //   this.router.navigate(['/customer']);
            // }, 500);
          // }
          else {
            this.toastr.warning("Invalid email and password.")

            // buttonLogin.removeAttribute("disabled");
          }

          if (this.authenticationSubscribe != null) this.authenticationSubscribe.unsubscribe();
        }
      );
    }
  }
  

}
