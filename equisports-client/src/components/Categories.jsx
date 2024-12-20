import { Zoom } from "react-awesome-reveal";

const Categories = () => {
  const categories = [
    {
      name: "Cricket",
      image:
        "https://i.ibb.co.com/VTrCNs0/colorful-illustration-depicting-man-cricket-player-full-motion-bat-against-white-background-artwork.jpg",
      bgColor: "bg-red-100",
    },
    {
      name: "Football",
      image:
        "https://i.ibb.co.com/0mPZ9Tx/close-up-of-many-soccer-players-kicking-a-football-on-a-field-competition-scene-created-with-generat.jpg",
      bgColor: "bg-blue-100",
    },
    {
      name: "Badminton",
      image: "https://i.ibb.co.com/Phtjgxs/123.jpg",
      bgColor: "bg-green-100",
    },
    {
      name: "Tennis",
      image:
        "https://i.ibb.co.com/RT1hMtv/view-tennis-player-with-digital-art-style-effect-23-2151737667.jpgg",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Hockey",
      image:
        "https://i.ibb.co.com/YbvFKZf/images-q-tbn-ANd9-Gc-Tj90-Pu-Avtryy-QEJ8-Evr-Y9z-WUHw6r-Gudq-VTd-A-s.jpg",
      bgColor: "bg-purple-100",
    },
    {
      name: "Basketball",
      image: "https://i.ibb.co.com/y6wty95/basketball.jpg",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-12">
        <Zoom triggerOnce>
          <h2 className="text-center text-4xl font-bold text-black mb-8">
            <span className="text-red-900">Our</span> Categories
          </h2>
          <p className="text-center text-lg text-gray-600 mb-10">
            Explore a wide range of sports categories, featuring top-quality
            products and excellent reviews. Find the perfect gear for your game
            today!
          </p>
        </Zoom>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <Zoom cascade damping={0.2} triggerOnce>
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative flex justify-center items-center ${category.bgColor} h-80 rounded-lg shadow-lg overflow-hidden`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 object-cover h-[250px] w-[430px]"
                />
                <div className="absolute left-2 bottom-5  ">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Categories;
