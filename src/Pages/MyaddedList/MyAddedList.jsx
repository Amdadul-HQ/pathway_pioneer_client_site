
import { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAddedList = () => {
    const loadedList = useLoaderData()
    const [list,setList] = useState(loadedList)
    const handleDeletePlace = id =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
              
              popup: 'custom-font',
              title: 'custom-font',
              content: 'custom-font',
              confirm: 'custom-font',
              cancel: 'custom-font'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristspot/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                           swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    const newList = list.filter(person => person._id !== id );
                    setList(newList)
                    }
                })
                
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
       
    }
    // country,tourists_spot_name,spot_location,short_description,bordered_radio,totalVisitorsPerYear,photourl,travel_time,average_cost,email,userName
    return (
        <section className='max-w-[1440px] mx-auto'>
            <h1 className='text-center my-10 font-Bebas text-5xl '>My Added Place</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    list && list.map( item => <div className="items-center justify-between bg-[#F5F4F1] rounded-xl p-5" key={item._id}>    
                    <div>
                        <img className="w-full h-[300px] rounded-md" src={item.photourl} alt="" />
                    </div>
                    <div className="font-Montserrat mt-2">
                        <p className="text-[#5C5B5B] text-lg font-normal font-Montserrat uppercase"><span className="text-[#1B1A1A] text-base font-semibold">Country :</span> {item.country}</p>
                        <p className="text-[#5C5B5B] text-lg font-normal font-Montserrat uppercase"><span className="text-[#1B1A1A] text-base font-semibold">Tourist Spot Name: </span> {item.tourists_spot_name}</p>
                        <p className="text-[#5C5B5B] text-lg font-normal font-Montserrat uppercase"><span className="text-[#1B1A1A] text-base font-semibold">Total Visitors Per year: </span> {item.totalVisitorsPerYear}</p>
                    </div>
                    <div className="flex justify-between gap-6 font-Raleway mt-3 font-Montserrat">
                        <Link to={`/touristsSpot/${item._id}`} className="bg-[#D2B48C] p-3 w-full text-white text-2xl rounded-xl text-center justify-center flex"><IoEyeSharp className='text-center'/></Link>
                        <Link to={`/update/${item._id}`} className="bg-[#3C393B] p-3 w-full text-white text-2xl rounded-xl text-center justify-center flex"><MdEdit className='text-center'/></Link>
                        <Link onClick={()=> handleDeletePlace(item._id)} className="bg-[#EA4744] w-full font-Raleway p-3 text-white text-2xl rounded-xl text-center justify-center flex"><MdDelete className='text-center'/></Link>
                    </div>
                </div> )
                }
            </div>
        </section>
    );
};

export default MyAddedList;