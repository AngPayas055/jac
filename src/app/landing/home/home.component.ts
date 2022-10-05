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
