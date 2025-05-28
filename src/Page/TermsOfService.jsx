import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-[#263976] to-[#1c3481] py-14 text-center">
        <h1 className="text-4xl font-bold uppercase text-white mt-10">Terms of Service</h1>
        <p className="text-sm mt-5 text-black bg-white rounded-full inline-block px-4 py-1 mb-10 shadow-sm">
          Updated May 25, 2018
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 mt-[-60px] rounded-lg shadow-lg z-10 relative mb-16">
        <section className="mb-3">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Introduction</h2>
          <p className="text-gray-700 text-sm">
            Welcome to NationWide. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-3">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Use of Website</h2>
          <p className="text-gray-700 text-sm">
            You must be at least 18 years old or have parental consent to use this website. You agree not to misuse the website for any illegal or unauthorized purpose.
          </p>
        </section>

        <section className="mb-3">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Product Information</h2>
          <p className="text-gray-700 text-sm">
            We try to ensure all product details, descriptions, and prices are accurate. However, errors may occur. We reserve the right to correct any errors at any time.
          </p>
        </section>

        <section className="mb-3">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Orders and Payments</h2>
          <p className="text-gray-700 text-sm">
           Please note that all orders are subject to product availability and final confirmation before processing. To ensure a smooth and timely delivery, full payment must be completed prior to the shipment of any items. We appreciate your understanding and cooperation, as this helps us maintain accurate inventory management and provide you with the best possible service. Should any issues arise regarding availability or payment, our team will promptly communicate with you to resolve them efficiently.


          </p>
        </section>

        <section className="mb-3">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Returns and Refunds</h2>
          <p className="text-gray-700 text-sm">
            For comprehensive details regarding our returns and refund process, please visit our dedicated Return Policy page. There, you will find all the necessary information about eligibility, timeframes, and procedures to ensure a smooth and hassle-free experience. If you have any questions or need further assistance, our customer support team is always ready to help you every step of the way.
          </p>
        </section>

        <section className="mb-3">
          <h2 className="text-base font-semibold mb-1 text-gray-800">Privacy</h2>
          <p className="text-gray-700 text-sm">
            Your privacy is important to us. Please read our <a className="text-blue-600">Privacy Policy</a> for more information.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-1 text-gray-800">Changes to Terms</h2>
          <p className="text-gray-700 text-sm">
            We may update these terms at any time. Continued use of the site means you accept the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
