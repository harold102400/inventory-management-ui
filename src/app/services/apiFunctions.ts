import { Articulos } from "../interfaces/articulosinterface/Articulos";
import { PaginatedProducts } from "../interfaces/paginatedproducts/paginatedProducts";


const API_URL = import.meta.env.VITE_API_URL

export async function getProducts(page:number, limit: number, searchProduct: string = "") : Promise<PaginatedProducts>
{
    try {
        const res = await fetch(`${API_URL}/?page=${page}&limit=${limit}&search=${searchProduct}`, {
            headers: {
                "Content-Type" : "application/json",
            }
        });
        const products = await res.json();
        console.log(products);
        return products;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getProductById(id: number) : Promise<Articulos>
{
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            headers: {
                "Content-Type" : "application/json",
            }
        });
        const product = await res.json();
        console.log(product);
        return product;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function createProduct(data: Articulos) : Promise<Articulos>
{
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        
        if (res.ok) {
            console.log('producto creado');
            console.log(res.statusText)
        }
        const body = await res.json();
        return body.message;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function editProduct(data: Articulos, id: number) : Promise<void>
{
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        if (res.ok) {
            console.log('producto editado');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function deleteProduct(id: number) : Promise<void>
{
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type" : "application/json",
            }
        });
        if (res.ok) {
            console.log('producto eliminado');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}
