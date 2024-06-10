import { Articulos } from "../articulosinterface/Articulos";

export interface PaginatedProducts {
    "data" : Articulos[],
    "totalCount" : number,
    "page" : number,
    "limit" : number

}

 