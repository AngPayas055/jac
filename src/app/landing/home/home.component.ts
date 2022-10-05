import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../home/product-model';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(    
    public productService: ProductService,
  ) { }

  ngOnInit(): void {    
    this.getProducts();
  }
  productData: ProductModel[] = [];

  // getproducts(): void {
  //   this.productData = [];

  //   this.productService.getProducts().subscribe(
  //     data => {
  //       if (data.length > 0) {
  //         let products: ProductModel[] = [];
          
  //         for(var i=0;i<this.productData.length;i++) {
  //           if(i==0) {
  //             products.push(this.productData[i]);
  //           }
  //         }
  //       }
  //     }
  //   );  
  // }
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
