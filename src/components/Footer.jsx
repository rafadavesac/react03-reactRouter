export default function Footer({ text }) {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm">{text}</p>
      </div>
    </footer>
  );
}
