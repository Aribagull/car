import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const [customers, setCustomers] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [startCount, setStartCount] = useState(false);
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

    if (counterRef.current) observer.observe(counterRef.current);

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
    <div className="pt-20 text-white px-4 sm:px-6 md:px-20">
      <div className="py-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Over ons</h1>
        <p className="text-sm text-gray-300 mt-2">
          <Link to="/" className="hover:text-[#009225]">Startpagina</Link>{" "}
          / <span className="text-gray-300">Over</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1546356594-2b91bd0d72bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="About Car"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Over onze autoverhuur</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Wij bieden premium auto’s met uitstekende prestaties en comfort. Perfect voor lange ritten en stadsrondleidingen. Onze vloot wordt zorgvuldig onderhouden om ervoor te zorgen dat u bij elke huur de beste ervaring krijgt.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Waarom voor ons kiezen?</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Met jarenlange ervaring in de autoverhuurbranche richten wij ons op het bieden van kwaliteitsservice, betrouwbare auto’s en concurrerende prijzen. Of het nu voor zaken of vrije tijd is, wij zorgen dat u goed bediend wordt.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="About Service"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      <div
        ref={counterRef}
        className="px-4 sm:px-10 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left"
      >
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#009225]">{customers.toLocaleString()}+</h3>
          <p className="text-xl sm:text-2xl text-white font-semibold mt-2">Tevreden klanten</p>
          <p className="text-gray-200 mt-2 text-sm sm:text-base">
            Een natuurlijk foutje veroorzaakt beschuldigingen van pijn en lof, volledig duidelijk gemaakt.
          </p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#009225]">{reviews.toLocaleString()}+</h3>
          <p className="text-xl sm:text-2xl text-white font-semibold mt-2">Perfecte beoordelingen</p>
          <p className="text-gray-200 mt-2 text-sm sm:text-base">
            Een kleine fout kan soms tot lofwaardige resultaten leiden.
          </p>
        </div>
      </div>
    </div>
  );
}
