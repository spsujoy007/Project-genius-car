import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import PrivetRoute from "../../Pages/PrivetRoute/PrivetRoute";
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
                element: <PrivetRoute> <CheckOut></CheckOut> </PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivetRoute> <Orders></Orders> </PrivetRoute>
            }
        ]
    }
])

export default routes