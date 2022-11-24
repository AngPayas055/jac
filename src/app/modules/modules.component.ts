import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(
    private loginService: UserService,
    ) { }

  ngOnInit(): void {
  }
  
  productData: ProductModel[] = [];
  name = localStorage.getItem('name');
  toggleField(){
    document.body.classList.toggle('light-theme')
    if(localStorage.getItem('theme')=='dark'){      
      localStorage.setItem('theme','light') 
    }else{     
      localStorage.setItem('theme','dark') 
    }
  }

  logout() {
    this.loginService.logout().subscribe(data=>{
      // this.toastr.info(data.error.text);
    });
  }

}
