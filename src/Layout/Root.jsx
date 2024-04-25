
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <>
         <Header/>   
         <Outlet/>
         <Footer/>
        </>
    );
};

export default Root;