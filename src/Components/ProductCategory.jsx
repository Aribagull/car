import { useState } from "react";

const categories = [
    { label: "Laptop" },
    { label: "Mobile" },
    { label: "Tripods" },
     { label: "Lense" },
    { label: "Camera" },
    { label: "Electric Massagers" },
];

const ProductCategories = ({ onSelectCategory }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleClick = (label) => {
        setActiveCategory(label);
        onSelectCategory(label);
    };

    return (
        <div className="pb-10 mt-10">
            <h2 className="text-4xl py-3 my-10 mt-20 font-inter font-bold mx-14 pl-2 uppercase text-center">
                Categories
            </h2>
            <div className="flex flex-wrap justify-center px-16 items-center">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(cat.label)}
                        className={`border px-6 py-3 transition duration-300 
                            ${
                                activeCategory === cat.label
                                    ? "bg-[#1c3481] text-white"
                                    : "bg-white text-black hover:bg-blue-100"
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;
