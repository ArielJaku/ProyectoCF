import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class RepositorioProductosService {
  private apiURL = "https://dummyjson.com";
  constructor(private http: HttpClient) { }
  
  getPosts(): Observable<any>{
  return this.http.get(this.apiURL+"/products");}

  findPost(id: number): Observable<any>{
  return this.http.get(this.apiURL+"/products/" + id);
  }

  createPost(data: Producto): Observable<any>{
    return this.http.post(this.apiURL+"/products", data);
  }

  updatePost(data: Producto): Observable<any>{
  return this.http.put(this.apiURL+"/products/", data);
  }
}
