import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from "sweetalert2";


const Login = () => {
    const { loginUser , logInWithGoogle , logInWithGitHub } = useContext(AuthContext)
    const [showPassword,setShowPassword] = useState(false);


    const navigate = useNavigate();
    const location = useLocation();
    const history = location.state?.from || '/';

    const navigateNow = () => {
        setTimeout(() => { navigate(history, { replace: true }) }, 1)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleGoogleLogin = () => {
        logInWithGoogle()
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Good Job!",
                text: "Log in Successful",
            });
            navigateNow()
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
    const handleGitHubLogin = () => {
        logInWithGitHub()
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Good Job!",
                text: "Log in Successful",
            });
            navigateNow()
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

    const handleLogIn = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        loginUser(email,password)
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Good Job!",
                text: "Log in Successful",
            });
            navigateNow()
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
        <section  className='font-Montserrat'>
        <div className="max-w-xl mx-auto border py-9 px-14 my-20">
        <h1 className='font-Bebas text-3xl text-center my-4'>Log In</h1>
        <form onSubmit={handleLogIn} className="mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                    <input type={showPassword ? "text" : "password"} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                    <div onClick={handleShowPassword} className='absolute right-0 top-[30%] text-xl'>
                        {
                            showPassword ? <IoEyeOff/> : <IoEye/>
                        }
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    <button  type="submit" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                        </span>
                        <span className="relative">Log in</span>
                    </button>
                </div>
        </form>
        <div className="divider">OR</div>
        <div className="text-4xl justify-center flex gap-x-6 my-4">
            <div onClick={handleGoogleLogin} className=" btn items-center justify-center border rounded-lg py-2 text-blue-700">
                <FaGoogle/>
                <p className="text-base text-black font-Montserrat font-medium">Continue with Google</p>
            </div>
            <div onClick={handleGitHubLogin} className=" btn items-center justify-center border rounded-lg py-2">
                <FaGithub/>
                <p className="text-base text-black font-Montserrat font-medium">Continue with GitHub</p>
            </div>
        </div>
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-center font-Montserrat font-normal">Don't Have a account? <Link className="text-blue-600 hover:underline dark:text-blue-500 font-medium" to="/register">Register</Link></p>
        </div>
        </div>
    </section>
    );
};

export default Login;