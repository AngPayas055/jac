import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard-comment-dialog',
  templateUrl: './dashboard-comment-dialog.component.html',
  styleUrls: ['./dashboard-comment-dialog.component.css']
})
export class DashboardCommentDialogComponent implements OnInit {
  [x: string]: any;
  
  name = localStorage.getItem('name');
  id = localStorage.getItem('id');
  commentDetails = {
    id: this.caseData[0].id,
    comment: this.caseData[0].comment,
    commenter: this.caseData[0].commenter,
    name: this.caseData[0].name,
    post_id: this.caseData[0].post_id,
  }

  constructor(    
    @Inject(MAT_DIALOG_DATA) public caseData: any,
    public dialogRef: MatDialogRef<DashboardCommentDialogComponent>, 
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.checkMethod();
  }
  checkMethod(){
    if(this.caseData[1]=='edit' || this.caseData[1]=='delete'){
      this.commentDetails.id = this.caseData[0][0];
      this.commentDetails.comment = this.caseData[0][1];
    }
  }
  addComment(){
    if(this.caseData[1]=='add'){
      this.commentDetails.id = '';
      this.commentDetails.commenter = this.id;
      this.commentDetails.name = '';
      this.commentDetails.post_id = this.caseData[2]; 
      this.productService.addComment(this.commentDetails).subscribe( data =>{
      this.dialogRef.close()
    })     
    }else if(this.caseData[1]=='edit'){
      this.commentDetails.post_id = this.caseData[2];  
      this.productService.editComment(this.commentDetails.id,this.commentDetails).subscribe( data =>{
      this.dialogRef.close()
      })         
    }else if(this.caseData[1]=='delete'){ 
      this.productService.deleteComment(this.commentDetails.id).subscribe( data =>{
      this.dialogRef.close()
      return
      })         
    }
  }
  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 20)+"px";
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
