import { RiVerifiedBadgeFill } from 'react-icons/ri';

const ReviewSection = ({r}) => {
    const{customer_name,job_title,review,customer_image} = r
    return (
        <div className="w-96 p-7 space-y-5 rounded-xl drop-shadow-lg">
                    <div className="flex justify-between">
                        <div className="flex gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="29" viewBox="0 0 19 29" fill="none">
                                <path d="M8.00599 0.0548916C5.74293 0.368238 3.3058 1.83052 1.86092 3.728C1.26034 4.52878 0.520497 6.05199 0.241968 7.08777C0.0330702 7.87113 0.00695801 8.10614 0.00695801 9.48138C0.00695801 10.8566 0.0330702 11.0916 0.241968 11.875C0.903476 14.3557 2.4528 16.3924 4.68974 17.7328C5.35995 18.1332 6.36962 18.5423 7.10077 18.7077L7.58819 18.8208L7.30966 19.3083C6.68297 20.4137 4.70715 23.434 3.33191 25.3924C2.95763 25.9233 2.8793 26.1061 2.84448 26.4891C2.80096 27.0723 2.99245 27.5162 3.42765 27.8121C3.82804 28.082 4.53307 28.0907 5.69941 27.8469C8.01469 27.3595 10.1994 26.3934 12.1752 25.0007C13.124 24.3218 14.9257 22.5114 15.6482 21.493C17.241 19.2473 18.4073 16.0704 18.7903 12.9195C19.2952 8.82858 18.9122 6.47849 17.3803 4.17191C15.9789 2.07423 13.7594 0.603247 11.2439 0.124523C10.5998 0.00266647 8.6849 -0.0408535 8.00599 0.0548916Z" fill="#6E00FF"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="29" viewBox="0 0 19 29" fill="none">
                                <path d="M8.00599 0.0548916C5.74293 0.368238 3.3058 1.83052 1.86092 3.728C1.26034 4.52878 0.520497 6.05199 0.241968 7.08777C0.0330702 7.87113 0.00695801 8.10614 0.00695801 9.48138C0.00695801 10.8566 0.0330702 11.0916 0.241968 11.875C0.903476 14.3557 2.4528 16.3924 4.68974 17.7328C5.35995 18.1332 6.36962 18.5423 7.10077 18.7077L7.58819 18.8208L7.30966 19.3083C6.68297 20.4137 4.70715 23.434 3.33191 25.3924C2.95763 25.9233 2.8793 26.1061 2.84448 26.4891C2.80096 27.0723 2.99245 27.5162 3.42765 27.8121C3.82804 28.082 4.53307 28.0907 5.69941 27.8469C8.01469 27.3595 10.1994 26.3934 12.1752 25.0007C13.124 24.3218 14.9257 22.5114 15.6482 21.493C17.241 19.2473 18.4073 16.0704 18.7903 12.9195C19.2952 8.82858 18.9122 6.47849 17.3803 4.17191C15.9789 2.07423 13.7594 0.603247 11.2439 0.124523C10.5998 0.00266647 8.6849 -0.0408535 8.00599 0.0548916Z" fill="#6E00FF"/>
                            </svg>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#010101] text-lg font-normal">{review}</p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-x-3">
                            <img className="w-14 rounded-full h-14" src={customer_image} alt="" />
                        </div>
                            
                                <div>
                                <h1 className="text-[#010101] text-lg font-medium flex justify-center items-center">{customer_name}<RiVerifiedBadgeFill className="text-xl"/></h1>
                                <p className="text-[#010101] text-sm font-normal">{job_title}</p>
                                </div>
                    </div>
                </div>
    );
};

export default ReviewSection;