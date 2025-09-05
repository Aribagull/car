import { useState } from "react";
import { FiSend } from "react-icons/fi";
import CustomButton from "../CustomComponents/CustomButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div 
    id="contact-section"
    className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="grid md:grid-cols-2 w-full max-w-6xl bg-black">
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1669143511726-1a77e6cde1a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Car"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-20 py-12">
          <h2 className="text-5xl font-semibold mb-2">Have questions?</h2>
          <h2 className="text-5xl font-semibold mb-8">Get in touch!</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full input-underline bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input-underline w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input-underline w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-underline w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="1"
              value={formData.message}
              onChange={handleChange}
              className="input-underline w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition resize-none py-2"
            ></textarea>

            <div className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <label>
                I agree that my submitted data is{" "}
                <a href="#" className="underline text-blue-400">
                  collected and stored
                </a>.
              </label>
            </div>

          
             
              <CustomButton className="flex items-center gap-2 normal-case"> <FiSend className="text-lg" />Get in Touch</CustomButton>
            
          </form>
        </div>
      </div>
    </div>
  );
}
