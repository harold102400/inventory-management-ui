import {BrowserRouter } from 'react-router-dom';
import Navbar from './app/pages/navbar/Navbar';
import RouterConfig from './app/routerconfig/RouterConfig';
import Footer from './app/pages/footer/Footer';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterConfig />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
