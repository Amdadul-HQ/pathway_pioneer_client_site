import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const allTouristSpot = useLoaderData()
    const [touristSpots,setTouristSpots] = useState(allTouristSpot)


    return (
        <section className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-3 gap-6 mt-5">
                {
                    touristSpots && touristSpots.map(spot => <div key={spot.id} className="p-5 border rounded-xl flex flex-col justify-between">
                    <div>
                        <img className="w-full h-[180px] md:h-[250px] rounded-xl" src={spot.photourl} alt="" />
                    </div>
                    <p className="text-2xl text-[#00a2ff] mt-2 font-medium font-Bebas">{spot.country}</p>
                    <h1 className="text-[#010101] text-4xl uppercase font-medium md:text-3xl mb-4 font-Montserrat">{spot.tourists_spot_name}</h1>
                    <p className="text-[#5A5959] font-medium">{spot.short_description.slice(0,100)}...<Link to={`/spot/${spot.id}`} className="text-[#6E00FF]">Show More</Link></p>
                    <p className="flex items-center gap-x-2 text-lg font-Montserrat mt-3"><span className="text-3xl"><AiFillDollarCircle/></span> Average Cost: {spot.average_cost}</p>
                    <p className="flex items-center gap-x-2 text-lg font-Montserrat mt-3"><span className="text-3xl"><FaUsers/></span> Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
                    <Link to={`/touristsSpot/${spot._id}`} className=" mt-3 backdrop-blur-3xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black bg-gray-50 rounded-full hover:text-white group ">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">View Details</span>
                </Link>
                </div>)
                }
            </div>
        </section>
    );
};

export default AllTouristsSpot;