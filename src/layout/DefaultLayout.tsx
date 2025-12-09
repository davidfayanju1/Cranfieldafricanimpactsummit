import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";

interface DefaultLayoutProp {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProp) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
