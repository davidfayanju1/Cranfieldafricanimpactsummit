import Hero from "../components/home/Hero";
import Metrics from "../components/home/Metrics";
import WhyUs from "../components/home/WhyUs";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="page-container">
        <Hero />
        <Metrics />
        <WhyUs />
      </div>
    </DefaultLayout>
  );
};

export default Home;
