import { Component, OnInit, Inject } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { PostModel } from '../../models/post.model';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { PostAuthorModel } from 'src/app/models/post-author.model';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardCommentDialogComponent } from '../dashboard-comment-dialog/dashboard-comment-dialog.component';

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
  localId = localStorage.getItem('id');
  postDataSource: MatTableDataSource<PostModel>;

  constructor(
    private loginService: UserService,
    public productService: ProductService,
    private toastr: ToastrService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getProducts();
    console.log(this.localId)
  }

  openDialog(method:string): void {
    this.dialog.open(DashboadAddpostDialog, {
      width: '650px',
      data: {
        objMethod: method
      },
    });
  }

  openEditDialog(id:number,content:any,method:string): void {
    this.dialog.open(DashboadAddpostDialog, {
      width: '650px',
      data: {
        objId: id,
        objConten: content,
        objMethod: method
      },
      
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
  comment(): void {
    const dialogRef = this.dialog.open(DashboardCommentDialogComponent, {
      width: '720px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

// 
// addpost dialog

@Component({
  selector: 'dashboard-addpost-dialog',
  templateUrl: 'dashboard-addpost-dialog.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboadAddpostDialog {
  constructor(    
    @Inject(MAT_DIALOG_DATA) public caseData: any,
    private router: Router,
    public dialogRef: MatDialogRef<DashboadAddpostDialog>,    
    public productService: ProductService,
    ) {}  

  id = localStorage.getItem('id');
  name = localStorage.getItem('name');  
  method = "";
	postModel: PostModel = new PostModel();
  postContent: any = {
    user_id: this.id,
    content: ''
  }
  
  ngOnInit(): void {
    this.checkCaseData();
  }

  checkCaseData(){
    this.method = this.caseData.objMethod;
    this.loadEditData();
    console.log(this.caseData)
  }

  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 20)+"px";
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  loadEditData(){
    this.postContent.content = this.caseData.objConten;
  }

  addPost(){
    if(this.method == 'Delete'){
      this.productService.deletePost(this.caseData.objId).subscribe(data =>{
        location.reload();
        this.dialogRef.close();  
        return
      })
    }else if (this.method == 'Edit'){
      this.productService.editPost(this.caseData.objId,this.postModel).subscribe(data =>{
        location.reload();
        this.dialogRef.close();  
      })
    }
    else{      
      this.postModel.user_id = this.postContent.user_id;
      this.postModel.content = this.postContent.content;
      this.productService.addPost(this.postModel).subscribe(data =>{   
        location.reload();
        this.dialogRef.close(); 
    })   
    } 
  }

}
