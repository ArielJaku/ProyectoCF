import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { Respuesta } from '../interfaces/response';
import { RepositorioProductosService } from '../servicios/repositorio-productos.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
      productos: Producto[] = [];
      respuestas: Respuesta[] = [];
      constructor(private postService: RepositorioProductosService, private dialog: MatDialog){}

      ngOnInit(): void{
        this.loadPosts();
      }

      loadPosts(){
      this.postService.getPosts().subscribe((data: Respuesta) => {
            this.productos = data.products;
      })}

      abrirModalProducto(): void {
      const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '800px',
      maxHeight: '90vh', 
      autoFocus: false,  
      disableClose: true 
    });}

  abrirModalUpdate(producto: Producto): void {
  const dialogRef = this.dialog.open(ModalFormComponent, {
    width: '800px',
    data: producto,
    maxHeight: '90vh', 
    autoFocus: false, 
    disableClose: true
  });}

  EliminarFake(producto: Producto): void {
      this.productos = this.productos.filter(x => x.id !== producto.id);
      console.log(this.productos)
  }

      
}   
