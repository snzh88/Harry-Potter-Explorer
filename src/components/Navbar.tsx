import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-3 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white mb-4 sm:mb-0">
          Harry Potter Wiki
        </Link>
        <div className="flex space-x-6 ">
          <Link className="text-white hover:text-blue-500 transition-colors duration-200" to="/">Home</Link>
          <Link className="text-white hover:text-blue-500 transition-colors duration-200" to="/houses">Houses</Link>
          <Link className="text-white hover:text-blue-500 transition-colors duration-200" to="/characters">Characters</Link>
          <Link className="text-white hover:text-blue-500 transition-colors duration-200" to="/Memes">Memes</Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;