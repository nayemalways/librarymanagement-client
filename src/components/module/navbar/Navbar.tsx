import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./themeToggler";
import logo from '../../../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 z-10 py-4 border-b border-gray-300 dark:bg-accent bg-white relative transition-all">

            <Link to="/">
                <img className="h-13" src={logo} alt="dummyLogoColored" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={'/all_book'}>All book</Link>
                <Link  to="/add_book">Add book</Link>
                <Link to="/borrow_summery">Borrow summery</Link>
                <div className="hidden lg:flex items-center text-sm gap-2">
                    <ModeToggle />
                </div>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full dark:bg-accent bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link to={'/all_book'}>All book</Link>
                <Link  to="/add_book">Add book</Link>
                <Link  to="/borrow_summery">Borrow summery</Link>
                <ModeToggle />
            </div>

        </nav>
    )
}

export default Navbar;