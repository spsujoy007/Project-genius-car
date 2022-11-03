import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Singup from "../../Pages/Singup/Singup";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Singup></Singup>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default routes