import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div
        className=""
        style={{
          height: "90vh",
        }}
      >
        <div className="center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
