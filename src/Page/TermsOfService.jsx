import { motion } from "framer-motion";
import heroimg from "../Assets/images/hero-section.jpg";

const TermsAndConditions = () => {
  return (
    <>
      <div
        className="relative w-full h-[550px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 font-inter tracking-[2px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-white text-2xl mt-16 sm:text-3xl md:text-5xl font-bold uppercase "
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-white text-sm mt-2 sm:text-sm md:text-sm mb-4 md:mb-8"
          >
            These terms outline the rules and responsibilities for using  this <br /> website and its services.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white px-8 py-8 sm:px-8 mb-16">
        {[
          {
            title: "Introduction",
            content:
              "Welcome to NationWide. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.",
          },
          {
            title: "Use of Website",
            content:
              "You must be at least 18 years old or have parental consent to use this website. You agree not to misuse the website for any illegal or unauthorized purpose.",
          },
          {
            title: "Product Information",
            content:
              "We try to ensure all product details, descriptions, and prices are accurate. However, errors may occur. We reserve the right to correct any errors at any time.",
          },
          {
            title: "Orders and Payments",
            content:
              "Please note that all orders are subject to product availability and final confirmation before processing. To ensure a smooth and timely delivery, full payment must be completed prior to the shipment of any items. We appreciate your understanding and cooperation, as this helps us maintain accurate inventory management and provide you with the best possible service. Should any issues arise regarding availability or payment, our team will promptly communicate with you to resolve them efficiently.",
          },
          {
            title: "Returns and Refunds",
            content:
              "For comprehensive details regarding our returns and refund process, please visit our dedicated Return Policy page. There, you will find all the necessary information about eligibility, timeframes, and procedures to ensure a smooth and hassle-free experience. If you have any questions or need further assistance, our customer support team is always ready to help you every step of the way.",
          },
          {
            title: "Privacy",
            content:
              "Your privacy is important to us. Please read our Privacy Policy for more information.",
          },
          {
            title: "Changes to Terms",
            content:
              "We may update these terms at any time. Continued use of the site means you accept the updated terms.",
          },
        ].map((section, index) => (
          <section className="mb-5" key={index}>
            <h2 className="text-base font-semibold mb-1 text-gray-800">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm">{section.content}</p>
          </section>
        ))}
      </div>
    </>
  );
};

export default TermsAndConditions;
