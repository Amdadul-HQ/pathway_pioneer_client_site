import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <section className='my-20 mx-auto border max-w-xl py-9 px-14 font-Montserrat'>
        <h1 className='font-Bebas text-3xl text-center my-4'>Log In</h1>
        <form className="mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className='flex justify-center'>
            <button type="submit" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
            </div>
        </form>
        <div className="divider">OR</div>
        <div className="text-4xl justify-center flex gap-x-6 my-4">
            <div className=" btn items-center justify-center border rounded-lg py-2 text-blue-700">
                <FaGoogle/>
                <p className="text-base text-black font-Montserrat font-medium">Continue with Google</p>
            </div>
            <div className=" btn items-center justify-center border rounded-lg py-2">
                <FaGithub/>
                <p className="text-base text-black font-Montserrat font-medium">Continue with GitHub</p>
            </div>
        </div>
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-center font-Montserrat font-normal">Don't Have a account? <Link className="text-blue-600 hover:underline dark:text-blue-500 font-medium" to="/register">Register</Link></p>
        </div>
    </section>
    );
};

export default Login;