export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded-md font-medium transition-colors cursor-pointer";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.primary}`}
    >
      {children}
    </button>
  );
}
