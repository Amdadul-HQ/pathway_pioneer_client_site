import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import ViewTouristsSpot from "../Pages/ViewTouristsSpot/ViewTouristsSpot";
import CountrySpot from "../Pages/CountrySpot/CountrySpot";
import MyAddedList from "../Pages/MyaddedList/MyAddedList";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/AddTouristsSpot',
                element:<AddTouristsSpot/>
            },
            {
                path:'/touristsSpot/:id',
                element:<ViewTouristsSpot/>,
                loader: ({params})=> fetch(`http://localhost:5000/touristspot/${params.id}`)
            },
            {
                path:'/touristsSpotCountry/:country',
                element:<CountrySpot/>,
                loader: ({params}) => fetch(`http://localhost:5000/touristspotCountry/${params.country}`)
            },
            {
                path:'/touristspotEmail/:email',
                element:<MyAddedList/>,
                loader:({params})=> fetch(`http://localhost:5000/touristspotEmail/${params.email}`)
            }
        ]
    }
])

export default router