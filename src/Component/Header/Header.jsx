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
                    <NavLink>All Tourists Spot</NavLink>
                    <NavLink to='/AddTouristsSpot'>Add Tourists Spot</NavLink>
                    <NavLink to={`/touristspotEmail/${user.email}`}>My List</NavLink>
                </ul>
                <div className="text-base font-medium space-x-6 flex items-center">
                    <NavLink to='/register'>Register</NavLink>
                    {
                        user ? <NavLink onClick={handleLogOut}>Log Out</NavLink> : <NavLink to='/login'>Log in</NavLink>
                    }
                    {/* <div className="relative w-fit">
                        <label className="flex cursor-pointer gap-2">
                        <svg className="absolute left-1 top-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <input type="checkbox" value="" className="toggle"/>
                        <svg className="absolute right-1 top-1 z-50 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div> */}
                    {
                        user && <div className="p-1 rounded-full border-2">
                        <img className="w-10 h-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-place="bottom-start" data-tooltip-content={user?.displayName}  src={user?.photoURL || <FaUser className="text-2xl"></FaUser>} alt="" />
                    </div>
                    }
            <Tooltip id="my-tooltip" />   
                </div>
            </nav>
        </header>
    );
};

export default Header;