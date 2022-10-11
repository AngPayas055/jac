import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private loginService: UserService,
    public productService: ProductService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  productData: ProductModel[] = [];

  logout() {
    this.loginService.logout().subscribe(data=>{
      // this.toastr.info(data.error.text);
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      data.map((value, index) => {
        let obj = {
          id: value.id,
          name: value.name,
          slug: value.slug,
          description: value.description,
          price: value.price,
        }
        this.productData.push(obj);
      })
      console.log(this.productData[0])
    });
  }

}
