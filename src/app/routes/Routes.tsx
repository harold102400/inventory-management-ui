import Home from "../pages/home/Home"
import NotFound from "../pages/notfound/NotFound"



export const routes = [
    {
        path: '/',
        element: <Home />
    },

    {
        path: '*',
        element: <NotFound />
    }
]