import {Link} from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="table_container">

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

              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><Link to="/productdetail" className="btn btn-dark">Ver mas detalles</Link></td>
              </tr>
            </tbody>
          </table>

    </div>
  ) 
};

export default Home;
