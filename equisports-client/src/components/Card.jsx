import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  //console.log(item);
  const { _id, image, itemName, categoryName, price, rating } = item;

  return (
    <div>
      <div className="card bg-gray-200 w-96 my-4 ">
        <figure className="px-5 pt-5 ">
          <img
            src={image}
            alt="Shoes"
            className="w-full h-48 object-cover rounded-lg object-center"
          />
        </figure>
        <div className="card-body py-3 font-bold">
          <h2 className="card-title">{itemName}</h2>
          <p>Category: {categoryName}</p>
          <p>Price: {price}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions">
            <Link to={`/product/${_id}`}>
              <button className="btn border-solid border-2 border-red-950 text-red-950 rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
