'use client'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState } from "react"

export function NavbarDropdown() {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open);
    }

    const downloadPDF = () => {
        const pdfUrl = "../../public/NGARA-CONSTITUTION.pdf";
        window.location.assign(pdfUrl);
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        onMouseOver={handleClick}
                        onMouseLeave={handleClick}
                        className='hover:italic hover:text-primary px-4 font-semibold text-base border-0'
                    >
                        About Us
                    </Button>
                </DropdownMenuTrigger>

                {open && (
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            <Link href='/about/vision' onClick={handleClick}>Mission and Vision</Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>
                            <Link href='/about/strategies' onClick={handleClick}>Strategies and Priorities</Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>
                            <Link href='/about/board' onClick={handleClick}>The Executive Board</Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>
                            <Button onClick={downloadPDF}>The Constitution</Button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <Link href='https://nefea.co.ke/' onClick={handleClick}>NGARA</Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                )}

            </DropdownMenu>
        </div>
    )
}
