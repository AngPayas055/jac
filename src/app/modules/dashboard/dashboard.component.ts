import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { PostModel } from '../../models/post.model';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { PostAuthorModel } from 'src/app/models/post-author.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productData: ProductModel[] = [];
  postsData: PostModel[] = [];
  postsAuthor: PostAuthorModel[] = [];
  name = localStorage.getItem('name');
  postDataSource: MatTableDataSource<PostModel>;

  constructor(
    private loginService: UserService,
    public productService: ProductService,
    private toastr: ToastrService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  openDialog(): void {
    this.dialog.open(DashboadAddpostDialog, {
      width: '650px',
    });
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
      this.postsData = [];
      data.map((value, index) => {
        let dataSource = {
          id: value.id,
          user_id: value.user_id,
          content: value.content,
          name: value.name,
        }
        this.postsData.push(dataSource);
      })
    })      
  }
}

@Component({
  selector: 'dashboard-addpost-dialog',
  templateUrl: 'dashboard-addpost-dialog.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboadAddpostDialog {
  constructor(public dialogRef: MatDialogRef<DashboadAddpostDialog>) {}  
  name = localStorage.getItem('name');

  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 20)+"px";
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
