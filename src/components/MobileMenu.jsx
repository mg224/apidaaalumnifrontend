import { useEffect } from "react"
import { Link } from "react-router-dom"

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col items-center justify-center transition-all duration-200 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto backdrop-blur-lg bg-white/70" : "h-0 opacity-0 pointer-events-none"}`}>

            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-7 text-gray-700 hover:text-gray-500 text-4xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                &times;
            </button>

            <Link to="/" className={`text-2xl font-semibold text-gray-700 hover:text-gray-500  my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={() => setMenuOpen(false)}>
                Home
            </Link>
            <Link to="/search" className={`text-2xl font-semibold text-gray-700 hover:text-gray-500  my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={() => setMenuOpen(false)}>
                Search
            </Link>
        </div>
    )
}