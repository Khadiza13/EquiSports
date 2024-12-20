import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllEquip = () => {
  const data = useLoaderData();
  const [sortedData, setSortedData] = useState([...data]);

  const handleSortByPrice = () => {
    const sorted = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sorted);
  };

  return (
    <div>
      <div className="bg-[#f5f5ee]">
        <p className="text-center text-red-950 text-4xl font-bold py-8">
          All Sports Equipments
        </p>
        <div className="w-10/12 mx-auto">
          <div className="overflow-x-auto">
            <table className="table border-collapse border border-red-950 text-lg ">
              <thead className="bg-gray-200 text-gray-800">
                <tr>
                  <th className="border border-red-950 p-4 text-center font-bold text-xl">
                    Name
                  </th>
                  <th className="border border-red-950 p-4 text-center font-bold text-xl">
                    Category
                  </th>
                  <th className="border border-red-950 p-4 text-center font-bold text-xl">
                    Price
                  </th>
                  <th className="border border-red-950 p-4 text-center font-bold text-xl">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-100">
                    <td className="border border-red-950 p-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">
                            {item.itemName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border border-red-950 p-4">
                      {item.categoryName}
                    </td>
                    <td className="border border-red-950 p-4">
                      {item.price}tk
                    </td>
                    <td className="border border-red-950 p-4 text-center">
                      <Link to={`/product/${item._id}`}>
                        <button className="btn  text-gray-800 hover:bg-gray-200 font-semibold px-4 py-2 rounded">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSortByPrice}
              className="btn bg-red-900 text-white my-8"
            >
              Sort by Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEquip;
