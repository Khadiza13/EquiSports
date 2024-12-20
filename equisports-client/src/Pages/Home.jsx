import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <Outlet></Outlet>
      <Categories></Categories>
      <Blog></Blog>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
