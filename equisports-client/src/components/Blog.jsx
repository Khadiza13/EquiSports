import { Slide } from "react-awesome-reveal";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "https://i.ibb.co.com/KFJrsdc/femaleskieralps-609059786.jpg",
      title: "Discover the Thrill of Skiing",
      description:
        "Explore the latest skiing gear and accessories to conquer the slopes with ease and style.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/pJDz50B/buy-skateboard-complete.webp",
      title: "Master the Art of Skateboarding",
      description:
        "Unleash your skills with our premium skateboards and accessories designed for performance.",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/0tnWLBL/torah-bright-Australia-snowboarder-2014.jpg",
      title: "Gear Up for Snowboarding",
      description:
        "From boards to helmets, find everything you need to make your snowboarding adventure safe and fun.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="w-11/12 mx-auto px-4">
        <Slide triggerOnce>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Upcoming <span className="text-red-900">Products</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Browse the collection of our new products and latest sports updates.
            You will definitely find what you are looking for.
          </p>
        </Slide>
        <div className="grid md:grid-cols-3 gap-8">
          <Slide cascade damping={0.2} triggerOnce>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-lg shadow-lg overflow-hidden bg-gray-100"
              >
                <img
                  className="w-full h-52 object-cover"
                  src={blog.image}
                  alt={blog.title}
                />

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {blog.description.substring(0, 100)}...
                  </p>
                  <a
                    href="#"
                    className="text-red-900 font-bold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Blog;
