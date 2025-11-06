import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "https://dummyjson.com";

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.apiURL+"/products");
  }

  createProducto(data: Producto): Observable<any>{
    return this.http.post(this.apiURL+"/products", data);
  }

  findProducto(id: number): Observable<any>{
    return this.http.get(this.apiURL+"/products/" + id);
  }

  updateProducto(data: Producto): Observable<any>{
    return this.http.put(this.apiURL+"/products/", data);
  }

  deleteProducto(id: number): Observable<any>{
    return this.http.delete(this.apiURL+"/products/" + id);
  }
}