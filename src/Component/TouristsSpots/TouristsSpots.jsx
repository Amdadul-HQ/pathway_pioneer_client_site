import {  useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const TouristsSpots = () => {

    const [touristsSpots,setTouristsSpots] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/touristspot')
        .then(res => res.json())
        .then(data => {
            setTouristsSpots(data)
        })
    },[])

    // spot_location,,bordered_radio,,,travel_time,,email,userName
    return (
        <section className="max-w-[1440px] mx-auto my-32">
            <h1 className="font-Bebas text-5xl text-black text-center font-semibold">Our Tourists Spots <br /> All Over Southeast Asia</h1>
            <p className="font-Montserrat text-lg text-center mt-4">Delve into the rich history and culture of Southeast Asia by exploring its magnificent temples. From the iconic Angkor Wat complex in Cambodia to the intricate pagodas of Bagan in Myanmar, these architectural wonders offer a glimpse into ancient civilizations and religious traditions..</p>
            <div className="grid grid-cols-3 gap-6 mt-5">
                {
                    touristsSpots && touristsSpots.slice(0,6).map(spot => <div key={spot.id} className="p-5 border rounded-xl flex flex-col justify-between">
                    <div>
                        <img className="w-full h-[180px] md:h-[250px] rounded-xl" src={spot.photourl} alt="" />
                    </div>
                    <p className="text-2xl text-[#00a2ff] mt-2 font-medium font-Bebas">{spot.country}</p>
                    <h1 className="text-[#010101] text-4xl uppercase font-medium md:text-3xl mb-4 font-Montserrat">{spot.tourists_spot_name}</h1>
                    <p className="text-[#5A5959] font-medium">{spot.short_description.slice(0,100)}...</p>
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

export default TouristsSpots;