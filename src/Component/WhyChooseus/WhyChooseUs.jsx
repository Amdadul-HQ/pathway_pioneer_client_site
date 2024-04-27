import hotel from '../../assets/hotel-1.png'
import map from '../../assets/map-1.png'
import price from '../../assets/price-tag-1.png'

const WhyChooseUs = () => {
    return (
        <section className='max-w-[1440px] mx-auto my-32 lg:px-0 md:px-4 px-5'>
            <div className="">
                <div className="">
                    <h1 className="font-Bebas md:text-5xl text-3xl text-black text-center font-semibold">Why Choose Us</h1>
                    <p className="font-Montserrat md:text-lg text-base text-center mt-4">Choose us for expert guidance, personalized experiences, and customer-centric
                        support. Enjoy meticulously planned adventures tailored to your preferences.</p>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col my-7 gap-6">
                    <div className="bg-sky-200 rounded-xl p-5">
                        <img className='ml-4 mt-4' src={hotel} alt=""/>
                        <h3 className="font-Bebas text-3xl font-semibold mt-4">Handpicked Hotels</h3>
                        <p className="font-Montserrat text-xl mt-2 font-normal">Indulge in comfort and luxury with our hotel service. Immerse yourself in
                            a relaxing retreat, where attentive hospitality meets modern amenities for a memorable stay.
                        </p>
                    </div>
                    <div className="bg-orange-200 rounded-xl p-5">
                        <img className='ml-4 mt-4' src={map} alt=""/>
                        <h3 className="font-Bebas text-3xl font-semibold mt-4">World ClassNameclassName Service</h3>
                        <p className="font-Montserrat text-xl mt-2 font-normal">Discover our prime map location, strategically situated for convenience.
                            Explore nearby attractions easily, ensuring a seamless and accessible experience during your
                            stay.</p>
                    </div>
                    <div className="bg-red-200 rounded-xl p-5">
                        <img className='ml-4 mt-4' src={price} alt=""/>
                        <h3 className="font-Bebas text-3xl font-semibold mt-4">Best Price Guarantee</h3>
                        <p className="font-Montserrat text-xl mt-2 font-normal">Experience affordability without compromising quality. Our pricing is
                            tailored to offer value, ensuring a budget-friendly option for your travel needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;