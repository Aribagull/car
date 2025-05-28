import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-[#263976] to-[#1c3481] py-14 text-center">
        <h1 className="text-4xl font-bold uppercase text-white my-10">About Us</h1>
        
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 mt-[-60px] rounded-lg shadow-lg z-10 relative mb-16">
        <section className="mb-4">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Who We Are</h2>
          <p className="text-gray-700 text-sm">
           NationWide is a customer-focused company committed to delivering quality products at competitive prices. 
Our journey began with a simple vision: to make online shopping easier, more affordable, and enjoyable for everyone, regardless of where they live. 
What started as a small initiative has now grown into a platform that serves thousands of customers every month. 
We believe in combining quality with value, ensuring that every product we offer meets the highest standards while remaining budget-friendly. 
At NationWide, customer satisfaction isn't just a goal — it's the core of everything we do.

          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-sm">
            Our mission is to deliver the best possible shopping experience to every customer by combining exceptional customer service, swift and reliable delivery, and a carefully curated selection of high-quality products. We are committed to fostering transparency in all our interactions, ensuring our customers feel confident and valued at every step of their journey. We strive to build lasting relationships based on trust and integrity, always prioritizing customer satisfaction and offering great value. Through continuous innovation and dedication, we aim to exceed expectations and make shopping not only easy and convenient but truly enjoyable for all.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-base font-semibold mb-1 text-gray-800">What We Offer</h2>
          <p className="text-gray-700 text-sm">
            From the latest electronics and trendy fashion to everyday home essentials, we proudly offer an extensive and diverse range of products thoughtfully curated to meet the unique needs and preferences of our customers. Our dedicated team is continually researching market trends and customer feedback to expand our catalog, ensuring we bring you the best and most relevant items. We are passionate about enhancing every aspect of your shopping experience, from product selection to seamless browsing and hassle-free purchasing, so that you always find exactly what you need with ease and confidence.


          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-1 text-gray-800">Our Promise</h2>
          <p className="text-gray-700 text-sm">
            We’re here to support you every step of the way. Whether you need expert advice before making a purchase or reliable assistance after your order has been delivered, our friendly and knowledgeable team is fully committed to ensuring your complete satisfaction. We understand that your trust is the foundation of our relationship, and we take that responsibility very seriously. That’s why we promise to always prioritize your needs, listen carefully to your concerns, and go above and beyond to provide solutions that exceed your expectations. Your happiness is our top priority, and we strive to make your experience with us smooth, positive, and truly rewarding.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
