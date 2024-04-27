import { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from "sweetalert2";


const AddTouristsSpot = () => {

    const{ user } =  useContext(AuthContext)
    const [selectedCountry, setSelectedCountry] = useState('');
    const handleSelectChange = (event) => {
        setSelectedCountry(event.target.value);
      };

    const handleAddSpot = e =>{
        e.preventDefault()
        const form = e.target ;
        const country = selectedCountry;
        const tourists_spot_name = form.tourists_spot_name.value;
        const spot_location = form.spot_location.value;
        const short_description = form.short_description.value;
        const bordered_radio = form.bordered_radio.value;
        const totalVisitorsPerYear = parseInt(form.totalVisitorsPerYear.value);
        const photourl = form.photourl.value;
        const average_cost = parseInt(form.average_cost.value);
        const travel_time = form.travel_time.value;
        const email = user.email;
        const userName = user.displayName;
        const data = {country,tourists_spot_name,spot_location,short_description,bordered_radio,totalVisitorsPerYear,photourl,travel_time,average_cost,email,userName}
        // /touristspot
        fetch('https://pathway-pioneers-server-site.vercel.app/touristspot',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
            Swal.fire({
            title: "Good job!",
            text: "Your Spot Added Successfully!",
            icon: "success"
            });
            form.reset()
            }
        })
    }
    return (

        <section
        className="w-full h-screen md:mb-0 mb-80 bg-[linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.70)),url('/background.png')] backdrop-blur-7xl bg-cover bg-center bg-no-repeat "

        >
         <div className="max-w-xl mx-auto relative font-Montserrat top-9 text-white ">

         <form  className="backdrop-blur-xl border p-6 rounded-lg absolute w-full space-y-4" onSubmit={handleAddSpot}>
            <h1 className="font-Montserrat text-4xl text-center font-semibold text-white">Add Tourists Spot</h1>
                <div className="flex md:flex-row flex-col items-center gap-x-5">
                    <div className="md:w-[50%] w-full">
                        <label className="text-white font-Montserrat" htmlFor="country_Name">Country Name</label>
                        <br />
                    <select value={selectedCountry} required id="country_Name" onChange={handleSelectChange} className="select w-full text-black font-Montserrat select-bordered ">
                        <option selected >Select Country</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="thailand">Thailand</option>
                        <option value="indonesia">Indonesia</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="vietnam">Vietnam</option>
                        <option value="cambodia">Cambodia</option>
                    </select>
                    </div>                
                    <div className="md:w-[50%] w-full">
                        <label className="text-white font-Montserrat" htmlFor="tourists_spot_name">Tourists Spot Name</label>
                        <br />
                        <input className="input input-bordered w-full text-black font-Montserrat" type="text" name="tourists_spot_name" id="tourists_spot_name" placeholder="Write Spot Name Here" required />
                    </div> 
                </div>               
               <div className="flex md:flex-row flex-col items-center gap-x-5">
                    <div className="md:w-[50%] w-full">
                        <label className="text-white font-Montserrat" htmlFor="spot_location">Spot Location</label>
                        <br />
                        <input className="input input-bordered w-full text-black font-Montserrat" type="text" name="spot_location" id="spot_location" placeholder="Spot Location Here" required />
                    </div>    
                    <div className="md:w-[50%] w-full">
                        <label className="text-white font-Montserrat" htmlFor="totalVisitorsPerYearitorsPerYear">Total Visitors PerYear</label>
                        <br />
                        <input className="input input-bordered w-full text-black font-Montserrat" type="text" placeholder="Total Visitors PerYear" id="totalVisitorsPerYear" name="totalVisitorsPerYear" required/>
                    </div> 
                </div>              
                <div>
                    <label className="text-white font-Montserrat" htmlFor="photourl">Photo URL</label>
                    <br />
                    <input className="input input-bordered w-full text-black font-Montserrat" type="url" placeholder="Photo URL" id="photourl" name="photourl" required />
                </div>   
                <div className="flex gap-x-6 w-full">
                    <div className="flex items-center w-full px-4 border bg-white border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="summer" name="bordered_radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Summer</label>
                    </div>
                    <div className="flex items-center w-full px-4 border bg-white border-gray-200 rounded dark:border-gray-700">
                        <input  id="bordered-radio-2" type="radio" value="winter" name="bordered_radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Winter</label>
                    </div>    
                </div>
                <div className="flex gap-x-5">
                    <div className="w-[50%]">
                        <label className="text-white font-Montserrat" htmlFor="average_cost">Average Cost</label>
                        <br />
                        <input className="input input-bordered w-full text-black font-Montserrat" type="tel" name="average_cost" id="average_cost" placeholder="Average Cost" required/>
                    </div>    
                    <div className="w-[50%]">
                        <label className="text-white font-Montserrat" htmlFor="travel_time">Travel Time</label>
                        <br />
                        <input className="input input-bordered text-black font-Montserrat w-full" type="text" placeholder="Travel Time" id="travel_time" name="travel_time" required/>
                    </div> 
                </div> 
                <div>
                    <label className="text-white font-Montserrat" htmlFor="short_description">Short Description</label>
                    <br />
                    <textarea placeholder="Short Description" id="short_description" name="short_description" className="textarea textarea-bordered textarea-lg w-full text-black" required ></textarea>
                </div>   
                <div className="flex justify-center">
                {/* <button type="submit" className="btn btn-block">Add Place</button> */}
                <button  className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Add Place</span>
                    <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                </button>
                </div>         
            </form>
         </div> 
        </section>
    );
};

export default AddTouristsSpot;