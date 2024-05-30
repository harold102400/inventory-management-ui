import {BrowserRouter } from 'react-router-dom';
import Navbar from './app/navbar/Navbar';
import RouterConfig from './app/routerconfig/RouterConfig';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterConfig />
      </BrowserRouter>
    </>
  )
}

export default App
