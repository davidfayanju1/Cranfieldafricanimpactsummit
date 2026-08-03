import Hero from "../components/home/Hero";
// import Metrics from "../components/home/Metrics";
import WhyUs from "../components/home/WhyUs";
import PitchCompetitionPopup from "../components/home/PitchCompetitionPopup";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="page-container">
        <PitchCompetitionPopup />
        <Hero />
        {/* <Metrics /> */}
        <WhyUs />
      </div>
    </DefaultLayout>
  );
};

export default Home;
