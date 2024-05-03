import Link from 'next/link';
import React, { useState } from 'react';

const NavDropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div className="dropdown relative">
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hover:italic hover:text-primary px-4 font-semibold text-base border-0"
            >
                Dropdown
            </button>
            {isOpen && (
                <ul className="dropdown-content w-56 absolute top-0 left-0 py-1 bg-white rounded-md shadow-sm z-50">
                    <Link href='/about/constitution'>
                        <li className="text-gray-700 hover:bg-gray-100 px-3 py-2">
                            The Constitution
                        </li>
                    </Link>

                    <Link href='/about/vision'>
                        <li className="text-gray-700 hover:bg-gray-100 px-3 py-2">
                            Mission and Vision
                        </li>
                    </Link>

                    <Link href='/about/strategies'>
                        <li className="text-gray-700 hover:bg-gray-100 px-3 py-2">
                            Strategies and Priorities
                        </li>
                    </Link>

                    <Link href='/about/board'>
                        <li className="text-gray-700 hover:bg-gray-100 px-3 py-2">
                            The Executive Board
                        </li>
                    </Link>

                </ul>
            )}
        </div>
    );
};

export default NavDropdownMenu;