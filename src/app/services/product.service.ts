import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../landing/home/product-model';
import { AppSettings } from '../settings/app.settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURI: string  = new AppSettings().getApiUrl();

  constructor(    
    private http: HttpClient,
  ) { }

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
    
    let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return new Observable<any>( (observer) => {
        this.http.get(this.apiURI + "/posts", options).subscribe( response => {
            observer.next(response);
            observer.complete();
        })
    })
  }

}
