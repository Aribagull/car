export default function CustomButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`mt-3 px-6 py-3 uppercase bg-black border border-white rounded transition-all duration-500 ease-in-out hover:bg-gray-900 hover:border-transparent ${className}`}
    >
      {children}
    </button>
  );
}
