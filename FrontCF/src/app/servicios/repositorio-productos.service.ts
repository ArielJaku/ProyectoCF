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

  createPost(data: Producto): void{
    let jsonString: string = JSON.stringify(data);
    fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonString
  })
  .then(res => res.json())
  }

  updatePost(data: Producto): void{
    fetch('https://dummyjson.com/products/'+ data.id, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.title
      })
    })
    .then(res => res.json())
    }
}
