import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { PostModel } from '../../models/post.model';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productData: ProductModel[] = [];
  postsData: PostModel[] = [];
  name = localStorage.getItem('name');
  postDataSource: MatTableDataSource<PostModel>;

  constructor(
    private loginService: UserService,
    public productService: ProductService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

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
    });
    this.getPosts();
  }

  getPosts() {
    this.productService.getPost().subscribe(data => {
      this.postsData = []
      this.postDataSource = new MatTableDataSource(this.postsData);
      data.map((value, index) => {
        let dataSource = {
          id: value.id,
          user_id: value.user_id,
          content: value.content,
        }
        this.postsData.push(dataSource);
      })
    });
  }

}
