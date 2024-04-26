import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from "sweetalert2";

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
                    <NavLink>Add Tourists Spot</NavLink>
                    <NavLink>My List</NavLink>
                </ul>
                <div className="text-base font-medium space-x-6">
                    <NavLink to='/register'>Register</NavLink>
                    {
                        user ? <NavLink onClick={handleLogOut}>Log Out</NavLink> : <NavLink to='/login'>Log in</NavLink>
                    }
                </div>
            </nav>   
        </header>
    );
};

export default Header;