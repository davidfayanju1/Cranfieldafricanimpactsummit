import Hero from "../components/home/Hero";
import Metrics from "../components/home/Metrics";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="page-container">
        <Hero />
        <Metrics />
      </div>
    </DefaultLayout>
  );
};

export default Home;
