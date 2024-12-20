const FAQ = () => {
  return (
    <section className="w-10/12 mx-auto my-16">
      <h2 className="text-4xl font-bold mb-8 text-red-900 text-center ">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <img
            src="https://i.ibb.co.com/xCrH8MD/illustration-icon-3d-frequently-asked-questions-faq-banner-computer-free-vector.jpg"
            alt="Sports Equipment"
            className="rounded-xl  object-cover"
          />
        </div>

        <div>
          <div className="space-y-4">
            <div className="collapse collapse-arrow bg-gray-100 border border-gray-200 rounded-lg">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-semibold text-gray-800">
                What sports equipment do you offer?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  We provide equipment for a variety of sports including skiing,
                  snowboarding, skateboarding, soccer, and more. Explore our
                  catalog for high-quality gear and accessories.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-100 border border-gray-200 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold text-gray-800">
                Do you offer customization for sports equipment?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  Yes, we provide customization options for certain products
                  like bats, jerseys, and skateboards. Add your name, logo, or
                  preferred design to make your gear unique.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-100 border border-gray-200 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold text-gray-800">
                What is your return policy for defective items?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  If you receive a defective product, you can return it within
                  30 days of purchase for a full refund or replacement. Please
                  contact our support team for assistance.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-100 border border-gray-200 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold text-gray-800">
                How long does delivery take?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  Delivery typically takes 3-7 business days, depending on your
                  location. Expedited shipping options are also available at
                  checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
