import { Link, useSearchParams } from "react-router-dom";
import notFound from "../../../assets/notfound.png";
import Create from "../create/Create";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/apiFunctions";
import { Articulos } from "../../interfaces/articulosinterface/Articulos";
import ReactPaginate from "react-paginate";
import './Home.css';

const Home = () => {

  const [products, setProducts] = useState<Articulos[] >([]);
  const [isLoading, setIsloading] = useState<Boolean>(true);
  const [pageCount, setPageCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({page : '1', limit: '10' });

  const changePage = ({ selected } : {selected: number}) => {
    setSearchParams({page:String(selected+1), limit : '10'});
    getPaginatedProducts(selected+1, 10);
  };

  const getPaginatedProducts = async (page:number, limit: number) => 
  {
      const allProducts = await getProducts(page, limit);
      setProducts(allProducts.data);
      setPageCount(Math.ceil(allProducts.totalCount/allProducts.limit))
      setSearchParams({page : String(allProducts.page), limit : String(allProducts.limit)})
      setIsloading(false);
  } 

  useEffect(() => {
    getPaginatedProducts(Number(searchParams.get("page")), Number(searchParams.get("limit")));
  }, [])

  function handleNewProduct(product: Articulos) {
    setProducts([...products, product]);
  }

  return (
    <div className="table_container">
      <Create handleNewProduct={handleNewProduct}/>
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
            {products
            .map((product) => (
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
      <ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={changePage}
         containerClassName={"paginationBttns"}
         previousLinkClassName={"previousBttn"}
         nextLinkClassName={"nextBttn"}
         disabledClassName={"paginationDisabled"}
         activeClassName={"paginationActive"}
       />
    </div>
  );
};

export default Home;
