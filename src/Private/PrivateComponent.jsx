import { useContext } from "react";
import { AuthContext } from "../Context/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";


const PrivateComponent = ({children}) => {

    const { user , loading } = useContext(AuthContext)
    const location = useLocation()


    if(loading) return (<div className="h-[calc(100vh-361px)] flex justify-center items-center">
        <div className="flex flex-col gap-4 w-52">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
    </div>)

    return user ? (
        <div>{ children }</div>
    ) : (
        <Navigate to={ '/login' } state={ { from: location } } replace />
    )
};

export default PrivateComponent;