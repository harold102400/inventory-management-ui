import { Link } from "react-router-dom";
import notFound from "../../../assets/notfound.png";
import Create from "../create/Create";
import { useEffect, useState } from "react";
import { getProducts } from "../../hooks/apiFunctions";
import { Articulos } from "../../interfaces/articulosinterface/Articulos";
import './Home.css';

const Home = () => {

  const [products, setProducts] = useState<Articulos[] | null>(null);
  const [isLoading, setIsloading] = useState<Boolean>(true);


  useEffect(() => {
    const data = async () => 
      {
          const allProducts = await getProducts();
          setProducts(allProducts);
          setIsloading(false);
      }   

      data();

  }, [])

  return (
    <div className="table_container">
      <Create />
      {products && !isLoading && products.length === 0 && (
        <div>
          <img src={notFound} alt="No se encontraron articulos" />
          <h1>No se encontraron articulos</h1>
        </div>
      )}

      {isLoading && <div>Cargando...</div>}

      {products && !isLoading && products.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">codigo</th>
              <th scope="col">nombre</th>
              <th scope="col">tipo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.codigo}</td>
                <td>{product.nombre}</td>
                <td>{product.tipo}</td>
                <td><Link to={`/productdetail/${product.id}`} className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
