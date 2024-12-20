import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://equisports-server-eight.vercel.app/myproducts?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setEquipment(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equisports-server-eight.vercel.app/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingEquipment = equipment.filter(
                (item) => item._id !== _id
              );
              setEquipment(remainingEquipment);
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <div
            key={item._id}
            className="card bg-[#f5f5ee] shadow-md p-2 border border-gray-200 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.itemName}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="flex items-center justify-center">
              <div className="card-body ">
                <h2 className="card-title text-lg font-bold">
                  {item.itemName}
                </h2>
                <p className="text-sm text-black">{item.description}</p>
                <p className="font-semibold">Price: ${item.price}</p>
                <p className="text-sm font-semibold">
                  Category: {item.categoryName}
                </p>
                <p className="text-sm font-semibold">
                  Stock: {item.stockStatus}
                </p>
                <p className="text-sm font-semibold">Rating: {item.rating}⭐</p>
              </div>
              <div className="join join-vertical">
                <Link to={`/product/${item._id}`}>
                  <button
                    className="btn
                 text-red-900 font-semibold join-item"
                  >
                    Details
                  </button>
                </Link>
                <Link to={`/product/${item._id}/update`}>
                  <button
                    className="btn font-semibold
                 text-red-900 join-item"
                  >
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn  font-semibold
                 text-red-900 join-item"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
