import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RepositorioProductosService } from '../servicios/repositorio-productos.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
    id = 0;
    Mproducto = {} as Producto;
    constructor(private route: ActivatedRoute, private postService : RepositorioProductosService){}

    ngOnInit(): void{
    this.id = this.route.snapshot.params['productoId'];
    this.postService.findPost(this.id).subscribe((producto : Producto) => {
      this.Mproducto = producto;
    })
    }
}
