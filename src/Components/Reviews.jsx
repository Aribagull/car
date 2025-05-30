import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "The product quality is excellent, and the delivery was on time. Customer service was very helpful. I will definitely order again!",
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The website is very user-friendly, and the shopping experience was smooth. Prices are reasonable too. Highly recommended!",
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    text: "The packaging was secure, and the product matched the description perfectly. I really enjoyed shopping here. Thank you!",
    name: "Sara Ahmed",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Reviwes = () => {
  return (
    <section className="bg-[#f1f8da] py-12 px-8 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-xs sm:text-base max-w-xl mx-auto">
            Discover the reasons why people love us and become your go-to partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 sm:p-6 shadow-sm flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-green-600 text-xl sm:text-2xl mb-3 sm:mb-4" />
              <p className="text-gray-800 mb-4 sm:mb-6 text-xs sm:text-base flex-grow">
                {item.text}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <span className="text-gray-700 text-xs sm:text-sm">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviwes;
