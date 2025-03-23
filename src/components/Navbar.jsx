import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faGraduationCap, faUser, faMagnifyingGlass,faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import logo from "../assets/apidaalogo.png"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="mx-auto px-4">
                <div className="flex md:justify-around sm: justify-between items-center h-28 px-4">
                    <Link to="/" className="font-bold">
                        <img src={logo} alt="APIDAA Logo" className="w-35" />
                    </Link>

                    {/* Mobile Menu */}
                    <div className="w-7 h-5 relative flex items-center cursor-pointer z-40 text-4xl md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        {menuOpen ? "✕" : "☰"}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-around w-full text-2xl ml-6">
                        <Link to="/" className="text-gray-700 hover:text-gray-500 transition-colors">
                          <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Link to="/gradyear" className="text-gray-700 hover:text-gray-500 transition-colors">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </Link>
                        <Link to="/pastroles" className="text-gray-700 hover:text-gray-500 transition-colors">
                          <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Link to="/industry" className="text-gray-700 hover:text-gray-500 transition-colors">
                          <FontAwesomeIcon icon={faBriefcase}/>
                        </Link>
                        <Link to="/name" className="text-gray-700 hover:text-gray-500 transition-colors">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}