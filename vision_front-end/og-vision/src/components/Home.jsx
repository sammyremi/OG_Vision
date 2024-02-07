import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Filters from "./Filters";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <div className="mx-auto lg:px-8 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
