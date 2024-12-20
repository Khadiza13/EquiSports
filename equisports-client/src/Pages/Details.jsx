import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();

  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = data;

  return (
    <div>
      <div className="hero bg-red-900">
        <div className="hero-content text-center">
          <div className="max-w-4xl py-20 ">
            <h1 className="text-4xl font-bold text-white mb-5">
              Product Details
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5ee]">
        <div className="w-9/12 mx-auto py-14 px-5  ">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <img src={image} className="w-96 h-96  rounded-full shadow-lg" />
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{itemName}</h2>
              <p className="text-gray-600 mb-2">
                <strong>Category:</strong> {categoryName}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Customization:</strong> {customization}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Delivery Time:</strong> {processingTime}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Pricing:</strong> {price}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Stock:</strong> {stockStatus}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Rating: </strong>
                {rating}⭐
              </p>
              <p className="text-gray-700 mt-5">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
