
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewSilider from '../ReviewSlider/ReviewSilider';

const CustomerReview = () => {
    const [review,setReview] = useState([])

    useEffect(()=>{
        fetch('/review.json')
        .then( res => res.json())
        .then( data => setReview(data) )
    },[])
    return (
        <section className="my-32 bg-[rgba(239,242,247,0.60)]">
            <div className="flex py-16 items-center max-w-screen-xl mx-auto gap-x-5">
                <h1  data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" className="text-[#010101] text-4xl md:ml-0 ml-5 md:text-7xl font-normal">Our <span className="font-medium">Customers</span><br /> Think We’re <br /> The best</h1>
            </div>
            <div className="pb-10">
            <ReviewSilider review={review} ></ReviewSilider>
            </div>
        </section>
    );
};

export default CustomerReview;