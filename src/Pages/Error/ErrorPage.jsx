import { Link } from "react-router-dom";
import notfound from '/404.jpg'
const ErrorPage = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
        <h1 className='text-6xl mb-2 mt-11 font-semibold text-center'>Nothing Found</h1>
        <img className='h-[550px] w-[600px]' src={notfound} alt="" />
        <Link className={'text-indigo-600 font-semibold px-5 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all  duration-500'} to='/'>GO TO HOME</Link>
    </div>
    );
};

export default ErrorPage;