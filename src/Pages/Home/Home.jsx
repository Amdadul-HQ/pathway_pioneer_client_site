import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import CountrySection from "../../Component/Country/CountrySection";
import CustomerReview from "../../Component/CustomerReview/CustomerReview";
import TouristsSpots from "../../Component/TouristsSpots/TouristsSpots";
import WhyChooseUs from "../../Component/WhyChooseus/WhyChooseUs";

const Home = () => {
    return (
        <>  
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner/>
            <TouristsSpots/>
            <WhyChooseUs/>
            <CountrySection/>
            <CustomerReview/>
        </>
    );
};

export default Home;