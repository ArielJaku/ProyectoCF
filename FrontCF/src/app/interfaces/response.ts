import { Producto } from "./producto"

export interface Respuesta {
        total : number,
        skip : number,
        limit : number,
        products : Producto[]
}