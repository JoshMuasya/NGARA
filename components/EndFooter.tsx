'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function EndFooter() {
  return (
    <footer className="bg-[#014421] text-primary px-6 md:px-16 lg:px-24 py-12">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">
        {/* About NEFEA */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4 tracking-tight text-secondary">About NEFEA</h4>
          <p className="text-sm leading-relaxed opacity-90">
            Empowering sustainable forest enterprise across Africa.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about/vision" className="hover:text-white transition-colors duration-200">
                Mission & Vision
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/strategies" className="hover:text-white transition-colors duration-200">
                Strategies and Priorities
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4 tracking-tight text-secondary">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/publications" className="hover:text-white transition-colors duration-200">
                Publications
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition-colors duration-200">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition-colors duration-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white transition-colors duration-200">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4 tracking-tight text-secondary">Get Involved</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/comingsoon" className="hover:text-white transition-colors duration-200">
                Partner With Us
              </Link>
            </li>
            <li>
              <Link href="/comingsoon" className="hover:text-white transition-colors duration-200">
                Newsletter Signup
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4 tracking-tight text-secondary">Contact Us</h4>
          <p className="text-sm leading-relaxed opacity-90">
            Email:{' '}
            <a href="mailto:info@nefea.org" className="hover:text-white transition-colors duration-200">
              info@nefea.org
            </a>
            <br />
            Phone: +254 XXX XXX XXX
            <br />
            Location: Nairobi, Kenya
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com/nefea"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/nefea"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/company/nefea"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="border-t border-primary/30 pt-8 mt-8 text-sm flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="text-center md:text-left">
          <p className="opacity-90">© {new Date().getFullYear()} NEFEA – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}