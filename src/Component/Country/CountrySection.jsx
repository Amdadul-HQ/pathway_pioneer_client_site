import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import { Link } from "react-router-dom";

const CountrySection = () => {
    const { country } = useContext(AuthContext)
    
    return (
        <section className="max-w-[1440px] mx-auto my-32">
            <h1 className="font-Bebas text-5xl text-black text-center font-semibold">Our Most Visited Country</h1>
            <p className="font-Montserrat text-lg text-center mt-4">Southeast Asia: Unveiling Thailand, Indonesia, Vietnam, Malaysia, Cambodia & Bangladesh</p>
            <div className="grid grid-cols-2 gap-6 my-5">
                {
                    country && country.map( c => <div key={c._id}>
                        <Link to={`/touristsSpotCountry/${c.country}`}>
                        <div className="h-96 w-full rounded-lg flex flex-col justify-center text-center items-center" style={{
                            background: `linear-gradient(45deg,rgba(0,0,0,0.07),rgba(0,0,0,0.4)),url(${c.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize:'cover',
                            backgroundPosition:'center'
                            }}>
                            <h1 className="font-Bebas text-gray-200 text-7xl opacity-75 font-medium">{c.country}</h1>
                            <p className="font-Montserrat text-white text-lg backdrop-blur-sm ">{c.description}</p>
                            </div>
                        </Link>
                    </div> )
                }
            </div>
        </section>
    );
};

export default CountrySection;