
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
                fetch(`https://pathway-pioneers-server-site.vercel.app/touristspot/${id}`,{
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
                    const newList = list.filter(i => i._id !== id );
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
    return (<section 
    className='w-full mt-5 mb-32 md:px-0 px-3'
    >
        <Helmet>
            <title>My List</title>
        </Helmet>
        <div className='max-w-[1440px] mx-auto font-Montserrat'>
        <div className="font-Montserrat">
            <table className="table">
                {/* head */}
                <thead className='md:text-xl font-medium'>
                <tr>
                    <th className='p-0'>Country Name</th>
                    <th className='p-0'>Tourist Spot Name</th>
                    <th className='p-0 md:flex hidden'>Average Cost</th>
                    <th></th>
                    <th className='text-center p-0'>Action</th>
                </tr>
                </thead>
                <tbody className='text-base font-normal'>
                {/* row 1 */}
                {
                    list && list.map( i => <tr key={i._id}>
                        
                        <td className='uppercase p-0 text-sm md:text-lg'>
                        {
                            i.country
                        }
                        <br/>
                        </td>
                        <td>{i.tourists_spot_name}</td>
                        <td className='md:flex hidden'>{i.average_cost}</td>
                        <td></td>
                    
                        <td className='flex gap-2 md:gap-x-3 justify-center'>
                        <Link to={`/touristsSpot/${i._id}`} className="bg-[#D2B48C] md:p-3  text-white text-2xl rounded-xl text-center justify-center flex"><IoEyeSharp className='text-center'/></Link>
                            <Link to={`/update/${i._id}`} className='bg-[#3C393B] text-white md:p-3 rounded-lg text-xl flex justify-center items-center'><button><MdEdit/></button></Link>
                            <Link onClick={()=> handleDeletePlace(i._id)} className='bg-[#EA4744] text-white md:p-3 rounded-lg text-xl flex justify-center items-center'><button><MdDelete/></button></Link>
                        </td>
                    </tr> )
                }
                </tbody>
            </table>
            </div>
        </div>
    </section>
        
        // <section className='max-w-[1440px] mx-auto'>
        //     <h1 className='text-center my-10 font-Bebas text-5xl '>My Added Place</h1>
        //     <div className='grid grid-cols-3 gap-6'>
        //         {
        //             list && list.map( item => <div className="items-center justify-between bg-[#F5F4F1] rounded-xl p-5" key={item._id}>    
        //             <div>
        //                 <img className="w-full h-[300px] rounded-md" src={item.photourl} alt="" />
        //             </div>
        //             <div className="font-Montserrat mt-2">
        //                 <p className="text-[#5C5B5B] text-lg font-normal font-Montserrat uppercase"><span className="text-[#1B1A1A] text-base font-semibold">Country :</span> {item.country}</p>
        //                 <p className="text-[#5C5B5B] text-lg font-normal font-Montserrat uppercase"><span className="text-[#1B1A1A] text-base font-semibold">Tourist Spot Name: </span> {item.tourists_spot_name}</p>
        //                 <p className="text-[#5C5B5B] text-lg font-normal font-Montserrat uppercase"><span className="text-[#1B1A1A] text-base font-semibold">Total Visitors Per year: </span> {item.totalVisitorsPerYear}</p>
        //             </div>
        //             <div className="flex justify-between gap-6 font-Raleway mt-3 font-Montserrat">
        //                 <Link to={`/touristsSpot/${item._id}`} className="bg-[#D2B48C] p-3 w-full text-white text-2xl rounded-xl text-center justify-center flex"><IoEyeSharp className='text-center'/></Link>
        //                 <Link to={`/update/${item._id}`} className="bg-[#3C393B] p-3 w-full text-white text-2xl rounded-xl text-center justify-center flex"><MdEdit className='text-center'/></Link>
        //                 <Link onClick={()=> handleDeletePlace(item._id)} className="bg-[#EA4744] w-full font-Raleway p-3 text-white text-2xl rounded-xl text-center justify-center flex"><MdDelete className='text-center'/></Link>
        //             </div>
        //         </div> )
        //         }
        //     </div>
        // </section>
    );
};

export default MyAddedList;