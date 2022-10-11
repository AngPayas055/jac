import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.model';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userModel: Register = new Register();

  constructor(    
    public userList: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveButton(){
    this.userList.registerUser(this.userModel).subscribe(data => {
      if (!data.error) {
        this.userModel.name = this.userModel.name,
        this.userModel.email = this.userModel.email,
        this.userModel.password = this.userModel.password,
        this.userModel.password_confirmation = this.userModel.password_confirmation,
        this.toastr.success("Register successful.")
        setTimeout(() => {
          this.router.navigate(['/security/login']);
        }, 500);
        
      } else {
        this.toastr.warning("Invalid Email")
      }
    });

  }

}
