import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../settings/app.settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostModel } from '../models/post.model';
// import { ProductModel } from '../landing/home/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURI: string  = new AppSettings().getApiUrl();
  private headers: any;

  constructor(    
    private http: HttpClient,
  ) { }

  // use this to get protected routes
  public getHeaders():any{
    this.headers = {headers: new HttpHeaders({
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Accept':'application/json',
    }) }
    return this.headers;
  }

  public getProducts(): Observable<any> {
    
    let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return new Observable<any>( (observer) => {
        this.http.get(this.apiURI + "/products", options).subscribe( response => {
            observer.next(response);
            observer.complete();
        })
    })
  }

  public getPost(): Observable<any> {
    return new Observable<any>( (observer) => {
        this.http.get(this.apiURI + "/posts", this.getHeaders()).subscribe( response => {
            observer.next(response);
            observer.complete();
        })
    })
  }

  public addPost(postModel: PostModel){
    return new Observable<any>( (observer) => {
      this.http.post(this.apiURI + "/posts",postModel, this.getHeaders()).subscribe( response => {
          observer.next(response)
          observer.complete()
      }, err => {
          observer.next(false)
          observer.complete()
      })
    })
  }

  public editPost(postId:number,postModel: PostModel){
    return new Observable<any>( (observer) => {
      this.http.put(this.apiURI + "/posts/"+postId, postModel, this.getHeaders()).subscribe( response => {
          observer.next(response)
          observer.complete()
      }, err => {
          observer.next(false)
          observer.complete()
      })
    })
  }

  public deletePost(id:number){
    return new Observable<any>( (observer) => {
      this.http.delete(this.apiURI + "/posts/"+id, this.getHeaders()).subscribe( response => {
          observer.next(response)
          observer.complete()
      }, err => {
          observer.next(false)
          observer.complete()
      })
    })
  }

}
