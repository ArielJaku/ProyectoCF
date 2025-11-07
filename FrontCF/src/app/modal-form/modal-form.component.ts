import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl,ReactiveFormsModule  } from '@angular/forms';
import { RepositorioProductosService } from '../servicios/repositorio-productos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
  productoForm!: FormGroup;
  esUpdate : Boolean = false;
  constructor(private fb: FormBuilder, private postService: RepositorioProductosService, 
              private dialogRef: MatDialogRef<ModalFormComponent>, @Inject(MAT_DIALOG_DATA) public producto: Producto) {}

  ngOnInit(): void {
    if(this.producto?.id != null) {this.esUpdate = true}
      this.productoForm = new FormGroup({
      id: new FormControl(this.producto?.id || null),
      title: new FormControl(this.producto?.title || ''),
      description: new FormControl(this.producto?.description || ''),
      category: new FormControl(this.producto?.category || ''),
      price: new FormControl(this.producto?.price || 0),
      discountPercentage: new FormControl(this.producto?.discountPercentage || 0),
      rating: new FormControl(this.producto?.rating || 0),
      stock: new FormControl(this.producto?.stock || 0),
      tags: new FormArray(this.producto?.tags?.map(tag => new FormControl(tag)) || []),
      brand: new FormControl(this.producto?.brand || ''),
      sku: new FormControl(this.producto?.sku || ''),
      weight: new FormControl(this.producto?.weight || 0),
      dimensions: new FormGroup({
        width: new FormControl(this.producto?.dimensions?.width || 0),
        height: new FormControl(this.producto?.dimensions?.height || 0),
        depth: new FormControl(this.producto?.dimensions?.depth || 0)
      }),
      warrantyInformation: new FormControl(this.producto?.warrantyInformation || ''),
      shippingInformation: new FormControl(this.producto?.shippingInformation || ''),
      availabilityStatus: new FormControl(this.producto?.availabilityStatus || ''),
      returnPolicy: new FormControl(this.producto?.returnPolicy || ''),
      minimumOrderQuantity: new FormControl(this.producto?.minimumOrderQuantity || 1),
      thumbnail: new FormControl(this.producto?.thumbnail || '')
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      const producto: Producto = this.productoForm.value;
      if(this.esUpdate){
          this.postService.updatePost(producto)
      }else{
          this.postService.createPost(producto)
      } 
    }
  }

  cerrar() : void {
    this.dialogRef.close()
  }
}
