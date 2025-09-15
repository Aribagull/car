import { useState } from "react"

export default function CarTabs({ car }) {
  const [activeTab, setActiveTab] = useState("features")

  const tabs = ["features", "options", "description"]

  const options = {
    Exterior: [
      "22 inch Lm Rims",
      "Aluminum parts exterior",
      "Outside mirror(s) automatically dimming",
      "Electric exterior mirrors with memory",
      "Electrically folding exterior mirrors",
      "Electrically adjustable exterior mirrors",
      "Body-colored exterior mirrors",
      "Heated exterior mirrors",
      "Automatic low beam",
      "Electronic brake force distribution",
      "Tinted glass",
      "Color black",
      "LED taillights",
      "LED daytime running lights",
      "Metallic color",
      "Rear parking sensor",
      "Parking sensor for",
      "Piano Black exterior",
      "S-Line Exterior",
      "Sports suspension",
      "Heat-resistant glass",
    ],
    Infotainment: [
      "Audio installation",
      "Multimedia preparation",
      "Navigation system full map",
    ],
    Interior: [
      "Rear seat can be folded down in parts",
      "Aluminum interior finish",
      "Ambient lighting",
      "Rear armrest",
      "Armrest for",
      "Automatically dimming rearview mirror",
      "On-board computer",
      "Cruise control",
      "Electric rear windows",
      "Electric windows for",
      "Electrically adjustable driver's seat with memory",
      "Electrically adjustable passenger seat",
      "Rear headrests",
      "Interior moldings aluminum",
      "Keyless start",
      "Leather/fabric upholstery",
      "Leather gear lever",
      "Rain sensor",
      "Sports seats",
      "Sports steering wheel",
      "Power steering",
      "Black headliner",
    ],
    Safety: [
      "Airbag(s) head rear",
      "Airbag(s) head front",
      "Airbag(s) side front",
      "Driver's airbag",
      "Passenger airbag",
      "Alarm class 1 (immobilizer)",
      "Alarm system",
      "Anti-lock Braking System",
      "Anti-slip regulation",
      "Autonomous Emergency Braking",
      "Crash warning system",
      "Brake Assist System",
      "Electronic Stability Program",
      "Lane sensor",
    ],
    Other: [
      "Bluetooth",
      "Bot recognition system",
      "Central locking with remote control",
      "Connected services",
      "DAB",
      "Electronic climate control",
      "Extra tinted glass at the rear",
      "Dark headliner",
      "Adjustable lumbar support(s)",
      "Alloy wheels 10-spoke 19\"",
      "Matrix LED headlights",
      "Heated windshield washers/wiper blades",
      "Paddle shifters",
      "Mood lighting",
      "S Line exterior",
      "Smartphone integration",
      "Leather steering wheel",
      "Multifunction steering wheel",
      "Fully digital instrument panel",
    ],
  }

  const description = `Drive with ease, comfort, and peace of mind with this Audi A6 Sedan...`

  return (
    <div className="mt-12 bg-[#151515] text-white rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-800 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-3 capitalize w-1/3 sm:w-auto text-center ${
              activeTab === tab
                ? "bg-gray-800 text-white font-bold border-b-2 border-white"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-6 text-sm sm:text-base leading-relaxed">
        {activeTab === "features" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["Brand", "Audi"],
              ["Model", "A6"],
              ["Type", "40 TFSI S edition Competition"],
              ["Bodywork", "Sedan"],
              ["Price", "€44,950"],
              ["Odometer reading", "56,331 km"],
              ["Fuel", "Hybrid (Gasoline)"],
              ["Transmission", "Automatic"],
              ["Year of construction", "2023"],
              ["License plate", "T-374-FB"],
              ["Colour", "Gray Metallic"],
              ["Upholstery", "Half leather / fabric"],
              ["Doors", "4"],
              ["Seats", "5"],
              ["Gears", "7"],
              ["Cylinders", "4"],
              ["Cylinder capacity", "1984 CC"],
              ["Assets", "204 HP"],
              ["Electric power", "1 HP"],
              ["Additional charge", "22%"],
              ["Top speed", "246 km/h"],
              ["Acceleration 0-100", "8.4 sec"],
              ["Weight", "1610 kg"],
              ["Load capacity", "625 kg"],
              ["Tank capacity", "63 Liters"],
              ["Max towing weight", "2000 kg"],
              ["APK", "until June 2, 2027"],
              ["Maintenance booklet", "Yes"],
              ["Emission class", "6"],
              ["CO2 emissions", "162 g/km"],
              ["Average consumption", "6.6 L/100km"],
              ["Consumption city", "8.5 L/100km"],
              ["Highway consumption", "5.4 L/100km"],
              ["VAT / Margin", "VAT"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-gray-600 pb-1"
              >
                <span className="text-gray-400">{label}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "options" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(options).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-green-500 font-semibold mb-2">{category}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "description" && (
          <div className="text-gray-300 whitespace-pre-line">{description}</div>
        )}
      </div>
    </div>
  )
}
