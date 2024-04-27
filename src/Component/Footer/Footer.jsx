import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <section className='max-w-[1320px] mx-auto py-32 flex items-center'>
                <div className='w-3/5'>
                    <h1 className='text-5xl font-Bebas font-medium'>PATHWAY PIONEERS</h1>
                    <p className='text-xl  font-Montserrat font-normal'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-x-5 text-4xl my-8'>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                    <h1 className='text-5xl  font-normal mb-8'>Get in Touch</h1>
                    <div className='space-y-4'>
                        <p className='items-center font-Montserrat flex gap-x-8'><FaPhone className=' ' /> +88 01533 333 333</p>
                        <p className='items-center font-Montserrat flex gap-x-8'><MdEmail className='' /> info@gmail.com</p>
                        <p className='items-center font-Montserrat flex gap-x-8'><FaLocationDot className=' ' /> 72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
                <div className='w-2/5 font-Montserrat'>
                    <h1 className='text-5xl  font-Rancho mb-8'>Connect with Us</h1>
                    <form noValidate="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                        </div>
                        <div className='flex justify-center'>
                        <button type="submit" className="text-center p-3 border-2 border-white w-fit  text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by PATHWAY PIONEERS</p>
  </aside>
</footer>

        </footer>
    );
};

export default Footer;