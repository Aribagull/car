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

  const description = `
Drive with ease, comfort, and peace of mind with this Audi A6 Sedan. It's a 2023 model with 56,331 kilometers on the odometer. The bold, sporty S line exterior styling is particularly appealing. With its gasoline engine and automatic transmission, this is a great car for many more kilometers. Want to drive with a bit of vigor? No problem! The sports seats provide support and stability! The matrix LED lighting is the latest in automotive lighting. Always maximum light on the road, without obstructing oncoming traffic! The car is also equipped with: sports suspension, half-leather upholstery, heat-insulating glass, a black headliner, a split-folding rear seat, and LED taillights.

Effortlessly customize your cockpit interface thanks to the digital dashboard in this car. Easily check the car's important functions via your smartphone and Connected Services, anytime, anywhere. You can operate the full-map navigation system and the audio system with DAB radio using buttons on the steering wheel. This way, you can always keep your attention on the road. The electronic climate control ensures a comfortable temperature in all conditions. Parking sensors are a useful tool for preventing parking damage. With paddle shifters on the steering wheel, a rain sensor, cruise control, automatically dimming exterior mirrors, central locking with remote control, and an onboard computer, this car is fully equipped.

The automatic safety systems in this Audi act as an extra pair of eyes. And not only that, but they can also actively intervene to protect you and your passengers. Unintentionally drifting out of lane? No worries, the lane-keeping system warns and corrects. The forward collision warning system, or in plain English, "collision warning," activates if the sensor detects insufficient distance from a vehicle ahead or oncoming traffic.

This car comes with a Bovag Warranty, so you can be assured that it has been thoroughly inspected. To truly experience this car, you absolutely must take a test drive. Email us now or call us, and we'll quickly schedule an appointment.

Please note: Our advertisements are compiled with great care. However, it is possible that more or fewer options are available than stated.
Our advice: Check carefully for all options when viewing or during a test drive.
No rights can be derived from our advertisements or the specification charts on the car.
`

  return (
    <div className="mt-12 bg-[#151515] text-white rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 capitalize ${
              activeTab === tab
                ? "bg-gray-800 text-white font-bold border-b-2 border-white"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6 text-sm leading-relaxed">
        {activeTab === "features" && (
          <div className="grid grid-cols-3 gap-x-16 gap-y-4 text-sm">
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
          <div className="space-y-6 grid grid-cols-2">
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
