import { useLoaderData } from "react-router-dom";

const ViewTouristsSpot = () => {
    const spot = useLoaderData()
    // console.log(spot);
    // country,tourists_spot_name,spot_location,short_description,bordered_radio,totalVisitorsPerYear,photourl,travel_time,average_cost,email,userName
    return (
        <section className="max-w-[1440] mx-auto my-20 font-Montserrat">
               <div className="grid grid-cols-4 justify-center items-center">
                    <div className="flex justify-center items-center">
                        <div>
                            <h1 className="uppercase">{spot.country}</h1>
                            <p>Tourist Spot Name : {spot.tourists_spot_name}</p>
                            <p>Location:{spot.spot_location}</p>
                            <p>Description: {spot.short_description}</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <img className="w-full mx-auto rounded-md" src={spot.photourl} alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <p>Seasonality : {spot.border_radio}</p>
                            <p>Discription : {spot.short_description}</p>
                            <p>Travel Time : {spot.travel_time}</p>
                            <p>Total Visitor Per Year : {spot.totalVisitorsPeryear}</p>
                            <p>Average Cost : {spot.average_cost}</p>
                        </div>
                    </div>

                </div>
        </section>
    );
};

export default ViewTouristsSpot;