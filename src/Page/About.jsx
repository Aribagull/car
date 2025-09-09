import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const [customers, setCustomers] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const navigate = useNavigate();
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let startCustomers = 0;
    let startReviews = 0;

    const customerInterval = setInterval(() => {
      startCustomers += 500;
      if (startCustomers >= 30000) {
        startCustomers = 30000;
        clearInterval(customerInterval);
      }
      setCustomers(startCustomers);
    }, 30);

    const reviewsInterval = setInterval(() => {
      startReviews += 50;
      if (startReviews >= 2587) {
        startReviews = 2587;
        clearInterval(reviewsInterval);
      }
      setReviews(startReviews);
    }, 30);

    return () => {
      clearInterval(customerInterval);
      clearInterval(reviewsInterval);
    };
  }, [startCount]);

  return (
    <div className="pt-20 text-white">
      <div className="py-20 text-center px-20">
        <h1 className="text-3xl font-bold text-white">About us</h1>
        <p className="text-sm text-gray-300 mt-2">
          <Link to="/" className="hover:text-[#009225]">
            Home
          </Link>{" "}
          / <span className="text-gray-300">About</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1546356594-2b91bd0d72bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Car"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Our Car Rentals</h2>
          <p className="text-gray-300 leading-relaxed">
            We provide premium cars with outstanding performance and comfort.
            Perfect for long drives and city tours. Our fleet is carefully
            maintained to ensure you get the best experience every time you rent
            with us.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 leading-relaxed">
            With years of experience in the car rental industry, we focus on
            providing quality service, reliable cars, and competitive prices.
            Whether it’s business or leisure, we’ve got you covered.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Service"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div
        ref={counterRef}
        className="px-36 py-10 grid md:grid-cols-2 gap-10 text-center md:text-left bg-white"
      >
        <div>
          <h3 className="text-4xl font-bold text-[#009225]">
            {customers.toLocaleString()}+
          </h3>
          <p className="text-xl text-black font-semibold mt-2">Happy Customers</p>
          <p className="text-gray-700 mt-2">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam.
          </p>
        </div>
        <div>
          <h3 className="text-4xl  font-bold text-[#009225]">{reviews}</h3>
          <p className="text-xl text-black font-semibold mt-2">Perfect Reviews</p>
          <p className="text-gray-700 mt-2">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam.
          </p>
        </div>
      </div>
    </div>
  );
}
