import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomComponents/CustomButton";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen">
         
      <img
        src="https://images.unsplash.com/photo-1654442593691-9ddf6147c706?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Car Detailing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-32">
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
          Expert detailing that <br /> restores and protects
        </h1>

        <div className="mt-10">
          <CustomButton
            className="text-white"
            onClick={() => navigate("/about")}
          >
            About Us
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
