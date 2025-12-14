import AboutHero from "../components/about/Hero";
import Mission from "../components/about/Mission";
import Team from "../components/about/Team";
import DefaultLayout from "../layout/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <AboutHero />
      <Mission />
      <Team />
    </DefaultLayout>
  );
};

export default About;
