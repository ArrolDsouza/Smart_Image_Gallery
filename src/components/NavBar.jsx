import { NavLink } from 'react-router-dom';
import './NavBar.css'; 
import "../AboutUs.jsx"
import "../Gallery/Gallery.jsx"

function NavBar() {
return (
    <nav className="bg-black text-white py-5 px-8 md:px-20 flex justify-between items-center">
    <div className="text-3xl md:text-4xl font-bold">Image Gallery</div>

      {/* Navigation Links */}
    <ul className="hidden md:flex space-x-12 text-lg relative">
        {[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/AboutUs' },
        
        ].map((item) => (
        <li key={item.name} className="relative group">
            <NavLink
            to={item.path}
            className={({ isActive }) =>
                `transition hover:text-green-400 ${
                isActive ? 'text-green-400 font-semibold' : ''
                }`
            }
            >
            {item.name}
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </li>
        ))}
    </ul>
    </nav>
);
}

export default NavBar;
