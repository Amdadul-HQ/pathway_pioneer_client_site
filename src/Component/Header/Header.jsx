import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip'
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user , logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(()=>{
            Swal.fire({
                icon: "success",
                title: "Good Job!",
                text: "Log Out Successfully",
            });
        })
        .catch(error => {
            console.log(error.message);
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message.split('/')[1].split(')')[0].replace(/-/g,' ')}`,
              });
        })
    }
    return (
        <header className="max-w-[1440px] mx-auto">
            <nav className="font-Montserrat flex justify-between py-5 items-center">
                <h1 className="font-Bebas text-4xl">Pathway Pioneers</h1>
                <ul className="text-base font-medium space-x-12">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/alltouristspot'>All Tourists Spot</NavLink>
                    <NavLink to='/AddTouristsSpot'>Add Tourists Spot</NavLink>
                    <NavLink to={`/touristspotEmail/${user?.email}`}>My List</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </ul>
                <div className="text-base font-medium space-x-6 flex items-center">
                    {
                        user ? <NavLink onClick={handleLogOut}>Log Out</NavLink> : <NavLink to='/login'>Log in</NavLink>
                    }
                    <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
                    {
                        user && <div className="p-1 rounded-full border-2">
                        <img className="w-10 h-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-place="right" data-tooltip-content={user?.displayName}  src={user?.photoURL || <FaUser className="text-2xl"></FaUser>} alt="" />
                    </div>
                    }
            <Tooltip id="my-tooltip" />   
                </div>
            </nav>
        </header>
    );
};

export default Header;