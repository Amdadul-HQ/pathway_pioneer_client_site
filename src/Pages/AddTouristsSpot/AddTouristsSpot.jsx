import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";


const AddTouristsSpot = () => {

    const{ user } =  useContext(AuthContext)


    const handleAddSpot = e =>{
        e.preventDefault()
        const form = e.target ;
        const country_Name = form.country_Name.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const spot_location = form.spot_location.value;
        const short_description = form.short_description.value;
        const bordered_radio = form.bordered_radio.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const photourl = form.photourl.value;
        const email = user.email;
        const userName = user.displayName;
        const data = {country_Name,tourists_spot_name,spot_location,short_description,bordered_radio,totalVisitorsPerYear,photourl,email,userName}
        console.log(data);
    }
    return (

        <section
        // className="w-full h-fit bg-[linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.70)),url('/background.png')] backdrop-blur-3xl bg-cover bg-center bg-no-repeat "

        >
         <div className="max-w-xl mx-auto relative font-Montserrat text-black ">

         <form  className="backdrop-blur-sm border p-6 rounded-lg absolute w-full top-9 space-y-4 bg-slate-300" onSubmit={handleAddSpot}>
            <h1 className="font-Montserrat text-4xl text-center font-semibold text-black">Add Tourists Spot</h1>
                <div>
                    <label className="text-black font-Montserrat" htmlFor="country_Name">Country Name</label>
                    <br />
                    <input className="input input-bordered w-full" type="text" name="country_Name" id="country_Name" placeholder="Country Name" />
                </div>                
                <div>
                    <label className="text-black font-Montserrat" htmlFor="tourists_spot_name">Tourists Spot Name</label>
                    <br />
                    <input className="input input-bordered w-full" type="text" name="tourists_spot_name" id="tourists_spot_name" placeholder="Write Spot Name Here" />
                </div>                
                <div>
                    <label className="text-black font-Montserrat" htmlFor="spot_location">Spot Location</label>
                    <br />
                    <input className="input input-bordered w-full" type="text" name="spot_location" id="spot_location" placeholder="Spot Location Here" />
                </div>                
                <div>
                    <label className="text-black font-Montserrat" htmlFor="short_description">Short Description</label>
                    <br />
                    <textarea placeholder="Short Description" id="short_description" name="short_description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
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
                <div>
                    <label className="text-black font-Montserrat" htmlFor="totalVisitorsPerYearitorsPerYear">Total Visitors PerYear</label>
                    <br />
                    <input className="input input-bordered w-full" type="text" placeholder="Total Visitors PerYear" id="totalVisitorsPerYear" name="totalVisitorsPerYear" />
                </div>   
                <div>
                    <label className="text-black font-Montserrat" htmlFor="photourl">Photo URL</label>
                    <br />
                    <input className="input input-bordered w-full" type="url" placeholder="Phono URL" id="photourl" name="photourl" />
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