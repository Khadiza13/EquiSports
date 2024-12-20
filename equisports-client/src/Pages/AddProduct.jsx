import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const handleAddItem = (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const itemName = e.target.itemName.value;
    const categoryName = e.target.categoryName.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = e.target.stockStatus.value;
    const userEmail = user.email;
    const userName = user.displayName;

    const newItem = {
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };
    //console.log(newItem);

    // Send data to server
    fetch("https://equisports-server-eight.vercel.app/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-red-950">Add New Item!</h1>
        <p className="py-4 text-gray-700">
          Add new items to your inventory, ensuring all details are accurate and
          complete.
        </p>
      </div>
      {/* Form */}
      <div className="card bg-[#f5f5ee] w-full shrink-0 mb-8">
        <form onSubmit={handleAddItem} className="card-body">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  User Name
                </span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user.displayName}
                readOnly
                className="input input-bordered bg-gray-100"
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  User Email
                </span>
              </label>
              <input
                type="text"
                name="userEmail"
                defaultValue={user.email}
                readOnly
                className="input input-bordered bg-gray-100"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Item Name
                </span>
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Enter item name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Category Name
                </span>
              </label>
              <select
                name="categoryName"
                className="select select-bordered"
                required
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Badminton">Badminton</option>
                <option value="Tennis">Tennis</option>
                <option value="Hockey">Hockey</option>
                <option value="Basketball">Basketball</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Description
                </span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Price
                </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Rating
                </span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Enter rating (out of 5)"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Stock Status
                </span>
              </label>
              <input
                type="number"
                name="stockStatus"
                placeholder="Enter available quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 font-semibold">
                  Processing Time
                </span>
              </label>
              <input
                type="text"
                name="processingTime"
                placeholder="Enter delivery time"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text text-red-900 font-semibold">
                Customization
              </span>
            </label>
            <input
              type="text"
              name="customization"
              placeholder="Enter customization options"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-red-900  text-white">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
