import { useEffect, useState } from "react"
import { deleteProduct, getProductById } from "../../services/apiFunctions"
import { useParams, useNavigate } from "react-router-dom"
import { Products } from "../../interfaces/productsinterface/Products";
import "../home/Home.css"


const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const parsedId = Number(id);
  
  //Actualizado el useState con Articulos solamente ya que es un objecto de un solo articulo
  const [product, setProduct] = useState<Products | null>(null)
  const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    async function data() {
      const product = await getProductById(parsedId);
      setProduct(product);
      setisLoading(false);
    }
  
    data();
  }, [])
  
  const handleDelete =async () => {
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
        <p className="product_title"><strong>Code:</strong> {product.code}</p>
        <p className="product_title"><strong>Brand:</strong> {product.brand}</p>
        <p className="product_title"><strong>Name:</strong> {product.name}</p>
        <p className="product_title"><strong>Price:</strong> {product.price}</p>
        <p className="product_title"><strong>Type:</strong> {product.type}</p>
          <h2 className="button_title">Actions</h2>
        <div className="button_container">
          <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    ) : (
      isLoading && <div>Loading...</div>
    )}
    </div>
  )
}

export default ProductDetail