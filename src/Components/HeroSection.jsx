import React from "react";
import image1 from "../Assets/images/img1.png";
import image2 from "../Assets/images/img2.png";
import image3 from "../Assets/images/img3.png";
import image4 from "../Assets/images/img4.png";
import image5 from "../Assets/images/img5.png";
import image6 from "../Assets/images/img6.png";

const HeroSection = () => {
    return (
        <div className="px-16 py-5 bg-white">
            <div className="bg-[#d3ecf3] flex flex-col md:flex-row items-center justify-between px-6 py-8 mb-3 h-96">
                <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
                    <img src={image1} alt="Phone 1" className="h-96 object-contain" />
                </div>

                <div className="flex-1 text-left md:text-left px-4 max-w-md">
                    <h2 className="text-5xl text-[#1c3481] animate-fadeSlideUp"><span className="text-[#00baf2]">MI</span> Mobile</h2>
                    <p className="text-gray-500 text-2xl animate-fadeSlideUp">Fast And Light</p>
                    <p className="font-semibold mt-1 text-3xl animate-fadeSlideUp">Pixel Perfect Deal Camera</p>
                    <button className="mt-4 px-4 py-2 bg-[#00baf2] text-white hover:bg-[#1c3481] animate-fadeSlideUp">
                        Shop Now
                    </button>
                </div>

              
                <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
                    <img src={image6} alt="Phone 4" className="h-80 object-contain" />
                </div>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#d3ecf3] p-4 flex justify-between items-center text-right">
                    <img src={image3} alt="Fashion" className="h-36 mb-4" />
                    <div className="flex-col">
                        <h3 className="text-[#1c3481] text-2xl font-bold fadeSlideUp"> <div className="text-[#00baf2] text-lg">Digital </div> Cameras </h3>
                        <button className="mt-2 text-sm  text-black font-bold fadeSlideUp">Shop Now</button>
                    </div>

                </div>

                <div className="bg-[#d3ecf3] p-4 flex justify-between items-center text-right">
                    <img src={image2} alt="Fashion" className="h-36 mb-4" />
                    <div className="flex-col">
<h3 className="text-[#1c3481] text-2xl font-bold"> <div className="text-[#00baf2] text-lg"> Lightweigh</div>  Laptop</h3>
                        <button className="mt-2 text-sm text-black font-bold">Shop Now</button>
                    </div>
                </div>

                <div className="bg-[#d3ecf3] p-4 flex justify-between items-center text-right">
                    <img src={image5} alt="Fashion" className="h-36 mb-4" />
                    <div className="flex-col">
                       <h3 className="text-[#1c3481] text-2xl font-bold"> <div className="text-[#00baf2] text-lg">Tripods</div>  Fashion</h3>
                        <button className="mt-2 text-sm  text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
