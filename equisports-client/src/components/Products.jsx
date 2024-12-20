import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const Products = () => {
  const data = useLoaderData();
  return (
    <div className="bg-[#f5f5ee]">
      <Fade triggerOnce>
        <p className="text-center text-black text-5xl font-bold py-8">
          Products
        </p>
      </Fade>
      <div className="w-10/12 mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-1">
          <Fade cascade damping={0.2} triggerOnce>
            {data.map((item, idx) => (
              <Card key={idx} item={item}></Card>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Products;
