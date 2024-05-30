import { Route, Routes } from "react-router-dom"
import { routes } from "../routes/Routes"


const RouterConfig = () => {
  return (
    <Routes>
        {
            routes.map((route, index: number) => {
                return <Route key={index} path={route.path} element={route.element} />
            })
        }
    </Routes>
  )
}

export default RouterConfig