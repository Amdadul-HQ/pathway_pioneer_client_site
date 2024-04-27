
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextComponent';
import Swal from 'sweetalert2';
import { IoEye , IoEyeOff  } from "react-icons/io5";
import { Fade } from 'react-awesome-reveal';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json'

const Register = () => {

    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)

    const pattern = /(?=.*[A-Z])(?=.*[a-z]).{6,}$/

    const { createUser , logOut , updateUserProfile } = useContext(AuthContext)


    const navigate = useNavigate();
    const location = useLocation();
    const history = location.state?.from || '/login';

    const navigateNow = () => {
        setTimeout(() => { navigate(history, { replace: true }) }, 1)
    }


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleConfirmShowPassword =() => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = firstName+' '+lastName;
        const email = form.email.value;
        const password = form.password.value;
        const repeat_password = form.repeat_password.value;
        const photo = form.photo.value;
        if(password !== repeat_password){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Does't Match",
              });
        }
        if(!pattern.test(repeat_password)){
            return Swal.fire({
                icon:"error",
                title:"Oops",
                text:"Password Should Have an Uppercase & Lowercase letter, It length should be more then 6 character"
            })
        }

        createUser(email,password)
        .then(result => {
            updateUserProfile(fullName,photo)
            .then(()=>{
                Swal.fire({
                    icon: "success",
                    title: "Good Job!",
                    text: "Account Created Successfully",
                });
                logOut()
                .then(()=>{

                })
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
        <section className='my-20 mx-auto border max-w-xl py-9 px-14 font-Montserrat'>
            <Fade>
                <h1 className='font-Bebas text-3xl text-center my-4 mb-7'>Create an account</h1>
            </Fade>
            
            <div>
                <Lottie animationData={animationData}/>
            </div>
            <form onSubmit={handleRegister} className="mx-auto">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="firstName" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="lastName" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Last name</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="url" name="photo" id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="photo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Photo url</label>
                </div>
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
                <div className="relative z-0 w-full mb-5 group">
                    <input type={showConfirmPassword ? "text" : "password"} name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Confirm password</label>
                    <div onClick={handleConfirmShowPassword} className='absolute right-0 top-[30%] text-xl'>
                        {
                            showConfirmPassword ? <IoEyeOff/> : <IoEye/>
                        }
                    </div>
                </div>
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <div className='flex justify-center my-5'>
                    <button onSubmit={handleRegister} type="submit" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                        </span>
                        <span className="relative">Sign Up</span>
                    </button>
                </div>
            </form>
            <div>
                <p className="text-center font-Montserrat font-normal">Already Have a account? <Link className="text-blue-600 hover:underline dark:text-blue-500 font-medium" to="/login">Log in</Link></p>
            </div>
        </section>
    );
};

export default Register;