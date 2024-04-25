import { NavLink } from "react-router-dom";

const Header = () => {
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
                    <NavLink>LogIn</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </div>
            </nav>   
        </header>
    );
};

export default Header;