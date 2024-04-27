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
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import Update from "../Pages/Update/Update";
import PrivateComponent from "../Private/PrivateComponent";

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
                element:<PrivateComponent><AddTouristsSpot/></PrivateComponent>
            },
            {
                path:'/touristsSpot/:id',
                element:<PrivateComponent><ViewTouristsSpot/></PrivateComponent>,
                loader: ({params})=> fetch(`https://pathway-pioneers-server-site.vercel.app/touristspot/${params.id}`)
            },
            {
                path:'/touristsSpotCountry/:country',
                element:<CountrySpot/>,
                loader: ({params}) => fetch(`https://pathway-pioneers-server-site.vercel.app/touristspotCountry/${params.country}`)
            },
            {
                path:'/touristspotEmail/:email',
                element:<PrivateComponent><MyAddedList/></PrivateComponent>,
                loader:({params})=> fetch(`https://pathway-pioneers-server-site.vercel.app/touristspotEmail/${params.email}`)
            },
            {
                path:'/alltouristspot',
                element:<PrivateComponent><AllTouristsSpot/></PrivateComponent>,
            },
            {
                path:'/update/:id',
                element:<PrivateComponent><Update/></PrivateComponent>,
                loader:({params}) => fetch(`https://pathway-pioneers-server-site.vercel.app/touristspot/${params.id}`)
            }
        ]
    }
])

export default router