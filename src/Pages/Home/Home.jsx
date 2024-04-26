import Banner from "../../Component/Banner/Banner";
import CountrySection from "../../Component/Country/CountrySection";
import TouristsSpots from "../../Component/TouristsSpots/TouristsSpots";
import WhyChooseUs from "../../Component/WhyChooseus/WhyChooseUs";

const Home = () => {
    return (
        <>
            <Banner/>
            <TouristsSpots/>
            <CountrySection/>
            <WhyChooseUs/>
        </>
    );
};

export default Home;