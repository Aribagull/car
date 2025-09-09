import React from "react";

export default function ContactSection() {
  return (
    <div className="w-full">
    
      <div className="bg-black text-white py-28 pt-40 text-center">
        <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
      </div>

     
      <div className="bg-[#f7faf6] min-h-screen flex justify-center items-center px-6 py-12">
  <div className="grid md:grid-cols-[60%_40%] gap-24 mx-auto max-w-6xl w-full">
    
    <div className="bg-[#e4ede1] rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        ASK YOUR QUESTION BELOW
      </h2>
      <p className="text-gray-700 my-6 text-sm">
        Do you have a question about our offer, company or services? Feel
        free to contact us by email, phone or via our contact form.
      </p>

      <form className="space-y-4 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full rounded-md border border-gray-700 p-3 focus:outline-none bg-[#e4ede1] "
          />
          <input
            type="email"
            placeholder="Email address*"
            className="w-full rounded-md border border-gray-700 p-3 focus:outline-none  bg-[#e4ede1] "
          />
        </div>

        <input
          type="tel"
          placeholder="Telephone number"
          className="w-full rounded-md border border-gray-700 p-3 focus:outline-none  bg-[#e4ede1] "
        />

        <textarea
          rows="4"
          placeholder="Question / Comment"
          className="w-full rounded-md border border-gray-700 p-3 focus:outline-none  bg-[#e4ede1] "
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
        >
          SEND
        </button>
      </form>
    </div>

    <div className="flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl w-36 font-bold mb-6">
        CONTACT INFORMATION
      </h2>

      <div className="space-y-6 text-gray-800 text-sm">
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>Dorpsstraat 72, 5051 CL Goirle</p>
        </div>

        <div>
          <h3 className="font-semibold">Telephone</h3>
          <p>+3113 534 1659 (General)</p>
          <p>+316 14 28 16 95 (Sale - Patrick)</p>
          <p>+316 53 44 58 22 (Sale - Ad)</p>
        </div>

        <div>
          <h3 className="font-semibold">Opening hours</h3>
          <p>Mon to Fri: 08:15 - 18:00</p>
          <p>Sat: 09:00 - 17:00 & Sun: Closed</p>
        </div>

        <div className="flex gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition">
            MAIL US
          </button>
          <button className="border border-gray-400 px-5 py-2 rounded-md hover:bg-gray-100 transition">
            SALE
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
