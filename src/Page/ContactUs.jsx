import React from "react";

export default function ContactUs() {
  return (
    <div className="w-[40%] p-10 bg-white text-gray-800  mx-auto mt-16 ">
      
      <div>
        <h2 className="text-4xl font-bold mb-4">Get In Touch With Us!</h2>
        <p className="mb-6 text-lg">
          Fill out the form below to receive a free and confidential.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[#1c3481] text-white font-semibold rounded-md hover:bg-gray-800"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
