import { Link } from 'react-router-dom';

export default function Header({ title }) {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-indigo-200 cursor-pointer">Home</Link>
          <Link to="/about" className="hover:text-indigo-200 cursor-pointer">About</Link> 
        </nav>
      </div>
    </header>
  );
}
