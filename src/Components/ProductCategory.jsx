import { useState } from "react";
import img1 from "../Assets/images/Mobile.jpg";
import img2 from "../Assets/images/Laptop.jpg";
import img3 from "../Assets/images/cctv.jpg";
import img4 from "../Assets/images/Lenses.jpg";
import img5 from "../Assets/images/Tripods.jpg";

const categories = [
  { label: "Mobile", image: img1, discount: "Discover Now" },
  { label: "Laptop", image: img2, discount: "Discover Now" },
  { label: "Camera", image: "https://images.unsplash.com/photo-1589935447067-5531094415d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2N0diUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D", discount: "Discover Now" },
  { label: "Lense", image: img4, discount: "Discover Now" },
  { label: "Tripods", image: img5, discount: "Discover Now" },
  { label: "Electric Shaver", image: "https://www.salepakistan.pk/storage/public/products/images/double-head-massager-price-in-pakistan-1706938107-65bdcefbf37e6.webp" , discount: "Discover Now" },
];

const ProductCategories = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (label) => {
    setActiveCategory(label);
    onSelectCategory?.(label);
  };

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Categories</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 px-4 max-w-6xl mx-auto">
  {categories.map((cat, index) => (
    <div
      key={index}
      onClick={() => handleClick(cat.label)}
      className="relative cursor-pointer group  overflow-hidden shadow-md hover:shadow-2xl transition duration-300 aspect-square"
    >
      <img
        src={cat.image}
        alt={cat.label}
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
        <h3 className="text-sm sm:text-base font-bold">{cat.label}</h3>
        <p className="text-xs sm:text-sm mt-1">{cat.discount}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ProductCategories;
