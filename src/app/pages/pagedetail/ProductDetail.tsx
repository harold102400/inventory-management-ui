import { useEffect, useState } from "react"
import { deleteProduct, getProductByCategory } from "../../hooks/apiFunctions"
import { useParams, useNavigate } from "react-router-dom"
import { Articulos } from "../../interfaces/articulosinterface/Articulos";
import "../home/Home.css"


const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const parsedId = Number(id);
  
  const [product, setProduct] = useState<Articulos[] | null>(null)
  const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    async function data() {
      const product = await getProductByCategory(parsedId);
      setProduct(product);
      setisLoading(false);
    }
  
    data();
  }, [])
  
  async function handleDelete() {
      await deleteProduct(parsedId)
      navigate('/')
  }

   function handleEdit() {
    if (product) {
      navigate('/edit', {state: {product}});
    }
}





  return (
    <div>
      {product ? (
      <div className="table_container">
        <p className="product_title"><strong>Código:</strong> {product.codigo}</p>
        <p className="product_title"><strong>Marca:</strong> {product.marca}</p>
        <p className="product_title"><strong>Nombre:</strong> {product.nombre}</p>
        <p className="product_title"><strong>Precio:</strong> {product.precio}</p>
        <p className="product_title"><strong>Tipo:</strong> {product.tipo}</p>
          <h2 className="button_title">Acciones</h2>
        <div className="button_container">
          <button className="btn btn-warning" onClick={handleEdit}>Editar</button>
          <button className="btn btn-danger" onClick={handleDelete}>Borrar</button>
        </div>
      </div>
    ) : (
      isLoading && <div>Cargando...</div>
    )}
    </div>
  )
}

export default ProductDetail