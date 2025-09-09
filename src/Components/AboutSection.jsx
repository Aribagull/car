import { useState, useEffect, useRef } from "react";
import { FaCarSide, FaUserTie } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuCarFront } from "react-icons/lu";
import { PiShieldStarBold } from "react-icons/pi";
import { VscKey } from "react-icons/vsc";


function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const step = Math.ceil(target / (duration / 16)); 
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, [visible, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const [open, setOpen] = useState("range");

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };

  return (
    <div className="bg-[#f7faf6] px-20 py-20">
      <div className="flex gap-12 items-center h-[400px]">
        <div className="w-1/2 pr-28">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            DRIVING THROUGH TIME: SINCE 1967 PASSION FOR CARS AS A REAL FAMILY
            BUSINESS!
          </h2>
          <p className="text-gray-600 mb-6">
            Discover over 55 years of car love at Autobedrijf Roks, a real
            family business. Step inside and experience the tradition of
            craftsmanship and reliability. You are most welcome!
          </p>
          <button className="bg-black text-white px-5 py-2 rounded-md">
            OUR STORY
          </button>
        </div>

        <div className="w-1/2 space-y-4">
          <div
            className="bg-[#e4ede1] p-8 px-12 rounded-lg cursor-pointer"
            onClick={() => toggle("range")}
          >
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-4 text-2xl font-semibold">
                <LuCarFront className="text-4xl" /> WIDE RANGE
              </span>
              {open === "range" ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                open === "range" ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 mt-3">
                Discover the varied stock of Autobedrijf Roks. From city cars to
                SUVs, find your ideal car today!
              </p>
            </div>
          </div>

          <div
            className="bg-[#e4ede1] p-8 px-12 rounded-lg cursor-pointer"
            onClick={() => toggle("since")}
          >
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-4 text-2xl font-semibold">
                <PiShieldStarBold className="text-4xl" /> SINCE 1967
              </span>
              {open === "since" ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                open === "since" ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 mt-3">
                More than 55 years of experience and dedication in the car
                industry.
              </p>
            </div>
          </div>

          <div
            className="bg-[#e4ede1] p-8 px-12 rounded-lg cursor-pointer"
            onClick={() => toggle("workshop")}
          >
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-4 text-2xl font-semibold">
                <VscKey className="text-4xl" /> WORKSHOP
              </span>
              {open === "workshop" ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                open === "workshop" ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 mt-3">
                Professional repair and maintenance with trusted experts.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-between items-center mt-16">
        <div>
          <h3 className="text-5xl font-bold flex justify-center items-center gap-2">
            <Counter target={1967} /> <MdCalendarMonth />
          </h3>
          <p className="text-gray-800 mt-2 font-bold">EXPERIENCE SINCE</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold flex justify-center items-center gap-2">
            <Counter target={75} /> <LuCarFront/>
          </h3>
          <p className="text-gray-800 mt-2 font-bold">CARS IN STOCK</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold flex justify-center items-center gap-2">
            <Counter target={9} /> <FaUserTie />
          </h3>
          <p className="text-gray-800 mt-2 font-bold">EMPLOYED PROFESSIONALS</p>
        </div>
      </div>
    </div>
  );
}
