export default function CustomButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`mt-6 px-6 py-3 uppercase bg-transparent border border-white rounded transition-all duration-500 ease-in-out hover:bg-black hover:border-transparent ${className}`}
    >
      {children}
    </button>
  );
}
