import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
{path: "", component:HomeComponent},
{path: "acercaDe", component:AcercaDeComponent},
{path: "productos", component:ProductosComponent},
{path: "productos/:productoId", component: DetalleComponent },
];
