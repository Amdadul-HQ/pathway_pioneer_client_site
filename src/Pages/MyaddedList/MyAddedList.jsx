import React from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const MyAddedList = () => {
    const list = useLoaderData()
    // country,tourists_spot_name,spot_location,short_description,bordered_radio,totalVisitorsPerYear,photourl,travel_time,average_cost,email,userName
    return (
        <section className='max-w-[1440px] mx-auto'>
            <h1>My Added Place</h1>
            <div>
                {
                    list && list.map( item => <div className="flex items-center justify-between bg-[#F5F4F1] rounded-xl p-5" key={item._id}>    
                    <div>
                        <img className="w-[185px] h-[240px]" src={item.photourl} alt="" />
                    </div>
                    <div className="font-Raleway">
                        <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Name:</span> {item.itemName}</p>
                        <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Chef:</span> {item.chefName}</p>
                        <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Price:</span> {item.price} Taka</p>
                    </div>
                    <div className="flex flex-col justify-around gap-6 font-Raleway">
                        <Link to={`/item/${item._id}`} className="bg-[#D2B48C] p-3 text-white text-2xl rounded-xl"><IoEyeSharp/></Link>
                        <Link to={`/updateitem/${item._id}`} className="bg-[#3C393B] p-3 text-white text-2xl rounded-xl"><MdEdit/></Link>
                        <Link onClick={()=> handleDeleteitem(item._id)} className="bg-[#EA4744] font-Raleway p-3 text-white text-2xl rounded-xl"><MdDelete/></Link>
                    </div>
                </div> )
                }
            </div>
        </section>
    );
};

export default MyAddedList;