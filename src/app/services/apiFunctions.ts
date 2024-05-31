import { Articulos } from "../interfaces/articulosinterface/Articulos";

const API_URL = import.meta.env.VITE_API_URL

export async function getProducts() : Promise<Articulos[]>
{
    try {
        const res = await fetch(API_URL, {
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

export async function getProductByCategory(id: number) : Promise<Articulos[]>
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

export async function createProduct(data: Articulos) : Promise<Articulos[]>
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
        return res.json();
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function editProduct(data: Articulos, id: number) : Promise<Articulos[]>
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
        return res.json();
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
