
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('none');

    // Navigation items data
    const navItems = [
        { id: 'Home', label: 'Home' },
        { id: 'Hire a Driver', label: 'Hire' },
        { id: 'Blog', label: 'Blog' },
        { id: 'About Us', label: 'About' },
        { id: 'Contact Us', label: 'Contact' }
    ];

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    <div className="flex-shrink-0 flex items-center">
                        <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl mr-2">
                            RR
                        </div>
                        <span className="text-xl font-bold text-gray-800">Rental</span>
                    </div>


                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <div key={item.id} className="relative group">
                                <button
                                    onClick={() => setActiveItem(item.label)}
                                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative"
                                >
                                    {item.id}

                                    <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${activeItem === item.id ? 'w-full' : ''}`}></span>
                                </button>
                            </div>
                        ))}
                    </nav>


                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                            Login
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
                            Sign Up
                        </button>
                    </div>


                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <div key={item.id} className="relative group">
                                    <button
                                        onClick={() => {
                                            setActiveItem(item.label);
                                            setIsMenuOpen(false);
                                        }}
                                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative px-2 py-1 text-left"
                                    >
                                        {item.label}

                                        <span className={`absolute left-2 -bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-1rem)] ${activeItem === item.label ? 'w-[calc(100%-1rem)]' : ''}`}></span>
                                    </button>
                                </div>
                            ))}
                            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                                <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-left px-2 py-1 relative group">
                                    Login
                                    <span className="absolute left-2 -bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 w-full">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;