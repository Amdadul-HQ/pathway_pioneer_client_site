import { useLoaderData } from "react-router-dom";

const ViewTouristsSpot = () => {
    const spot = useLoaderData()
    console.log(spot);
    return (
        <div>
            
        </div>
    );
};

export default ViewTouristsSpot;