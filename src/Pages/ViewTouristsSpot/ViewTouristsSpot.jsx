import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";

const ViewTouristsSpot = () => {
    const spot = useLoaderData()
    const {user} = useContext(AuthContext)
    // console.log(spot);
    // country,tourists_spot_name,spot_location,short_description,bordered_radio,totalVisitorsPerYear,photourl,travel_time,average_cost,email,userName
    return (
        <section className="max-w-[1440px] mx-auto my-20 font-Montserrat">
            <h1 className="text-5xl font-semibold font-Bebas text-center mb-7">Details Page</h1>
                <div className="grid grid-cols-3 gap-6 justify-center">
                    <div className="col-span-2">
                        <img className="w-full mx-auto rounded-md" src={spot.photourl} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <h1 className="uppercase text-5xl font-Bebas underline mb-3">{spot.country}</h1>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Tourist Spot Name : </span>{spot.tourists_spot_name}</p>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Location: </span>{spot.spot_location}</p>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Seasonality : </span>{spot.bordered_radio}</p>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Travel Time :</span> {spot.travel_time}</p>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Total Visitor Per Year :</span>{spot.totalVisitorsPerYear}</p>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Average Cost :</span> {spot.average_cost}</p>
                            <p className="uppercase text-lg font-bold mt-3"><span className="font-normal">Discription : </span>{spot.short_description}</p>
                       
                        </div>
                    {/* <div className="flex justify-center">
                    </div> */}
                    </div>

                </div>
        </section>
    );
};

export default ViewTouristsSpot;