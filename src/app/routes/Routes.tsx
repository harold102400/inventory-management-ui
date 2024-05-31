import Contact from "../pages/contactus/Contact"
import Edit from "../pages/edit/Edit"
import Home from "../pages/home/Home"
import NotFound from "../pages/notfound/NotFound"
import ProductDetail from "../pages/pagedetail/ProductDetail"



export const routes = [
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/productdetail/:id',
        element: <ProductDetail />
    },

    {
        path: '/edit',
        element: <Edit />
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