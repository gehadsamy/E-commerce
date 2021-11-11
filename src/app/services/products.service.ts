import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http : HttpClient) { }

  getProduct(url: any){
    return this.http.get<any>(url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
