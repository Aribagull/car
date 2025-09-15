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
        STEL UW VRAAG HIERONDER
      </h2>
      <p className="text-gray-700 my-6 text-sm">
        Heeft u een vraag over ons aanbod, ons bedrijf of onze diensten?
Neem gerust contact met ons op via e-mail, telefoon of ons contactformulier.
      </p>

      <form className="space-y-4 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Naam*"
            className="w-full rounded-md border border-gray-700 p-3 focus:outline-none bg-[#e4ede1] "
          />
          <input
            type="email"
            placeholder="E-mailadres*"
            className="w-full rounded-md border border-gray-700 p-3 focus:outline-none  bg-[#e4ede1] "
          />
        </div>

        <input
          type="tel"
          placeholder="Telefoonnummer"
          className="w-full rounded-md border border-gray-700 p-3 focus:outline-none  bg-[#e4ede1] "
        />

        <textarea
          rows="4"
          placeholder="Vraag / Opmerking"
          className="w-full rounded-md border border-gray-700 p-3 focus:outline-none  bg-[#e4ede1] "
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
        >
          VERZENDEN
        </button>
      </form>
    </div>

    <div className="flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl w-36 font-bold mb-6">
        CONTACT GEGEVENS
      </h2>

      <div className="space-y-6 text-gray-800 text-sm">
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>Patrimoniumstraat 8, 2181 GG Hillegom</p>
        </div>

        <div>
          <h3 className="font-semibold">Telefoon</h3>
          <p>+31 6 84658725 (Fasih)</p>
        </div>

        <div>
          <h3 className="font-semibold">Opening stijden</h3>
           Ma t/m vr: 08:00 - 18:00 <br />
                Za: 09:00 - 17:00 & Zo: Gesloten
        </div>

        <div className="flex gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition">
           MAIL ONS
          </button>
          <button className="border border-gray-400 px-5 py-2 rounded-md hover:bg-gray-100 transition">
            VERKOOP
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
