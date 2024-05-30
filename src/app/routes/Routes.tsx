import Contact from "../pages/contactus/Contact"
import Home from "../pages/home/Home"
import NotFound from "../pages/notfound/NotFound"
import ProductDetail from "../pages/pagedetail/ProductDetail"



export const routes = [
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/productdetail',
        element: <ProductDetail />
    },

    {
        path: '/contactus',
        element: <Contact />
    },

    {
        path: '*',
        element: <NotFound />
    }
]