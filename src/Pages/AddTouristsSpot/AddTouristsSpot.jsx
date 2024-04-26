

const AddTouristsSpot = () => {
    return (
        <section
        className="w-full h-[700px] bg-[linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.70)),url('/background.png')] backdrop-blur-3xl bg-cover bg-center bg-no-repeat "
        >
            <form>
                <div>
                    <label className="text-white font-Montserrat" htmlFor="country_Name">Country Name</label>
                    <br />
                    <input className="input input-bordered w-full max-w-xs" type="text" name="country_Name" id="country_Name" placeholder="Country Name" />
                </div>                
                <div>
                    <label className="text-white font-Montserrat" htmlFor="tourists_spot_name">Tourists Spot Name</label>
                    <br />
                    <input className="input input-bordered w-full max-w-xs" type="text" name="tourists_spot_name" id="tourists_spot_name" placeholder="Write Spot Name Here" />
                </div>                
                <div>
                    <label className="text-white font-Montserrat" htmlFor="spot_location">Spot Location</label>
                    <br />
                    <input className="input input-bordered w-full max-w-xs" type="text" name="spot_location" id="spot_location" placeholder="Spot Location Here" />
                </div>                
                <div>
                    <label className="text-white font-Montserrat" htmlFor="short_description">Short Description</label>
                    <br />
                    <textarea placeholder="Short Description" id="short_description" name="short_description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>   
                <div className="flex gap-x-6">
                    <div className="flex items-center px-4 border bg-white border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="summer" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Summer</label>
                    </div>
                    <div className="flex items-center px-4 border bg-white border-gray-200 rounded dark:border-gray-700">
                        <input  id="bordered-radio-2" type="radio" value="winter" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Winter</label>
                    </div>    
                </div>
                <div>
                    
                </div>         
            </form>
        </section>
    );
};

export default AddTouristsSpot;