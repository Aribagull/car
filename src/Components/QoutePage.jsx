import React, { useState } from "react";

export default function QuoteRequestForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm sm:max-w-md p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-start">
          <h2 className="text-lg sm:text-xl font-bold">Request a Quote</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-2xl font-bold leading-none"
            aria-label="Close form"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#698927]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[#698927]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[#698927]"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#698927] text-white font-medium py-2 rounded-md transition hover:bg-[#567023]"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}
