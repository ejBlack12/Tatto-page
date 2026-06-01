import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Testimonials', to: '/testimonials' },
];

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      {/* CTA section */}
      <div className="flex flex-col items-center justify-center gap-[39px] py-[80px] px-4">
        <div className="flex flex-col items-center gap-5 text-center text-white">
          <div className="flex flex-col items-center gap-4">
            <p className="font-poppins text-[14px] tracking-[4px] uppercase opacity-60">
              Upskill for a better future
            </p>
            <p className="font-abhaya font-bold text-[50px] leading-tight">
              Request More Information
            </p>
          </div>
          <p className="font-poppins text-[18px] leading-[33px] opacity-80 max-w-[629px]">
            Lift Media, LLC is a clinical stage healthcare company which is developing a unique.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-cyan-cta text-white font-poppins text-[16px] leading-normal rounded-[30px] px-[55px] py-[18px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.11)] hover:opacity-90 transition-opacity duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1480px] mx-auto px-[59px] py-6 flex items-center justify-between">
          {/* Copyright */}
          <p className="font-poppins text-[16px] text-white capitalize">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Nav links */}
          <nav className="flex gap-10 items-center">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="font-poppins text-[14px] text-neon-green hover:opacity-75 transition-opacity duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-[15px] items-center">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-[59px] h-[59px] rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white hover:opacity-75 transition-opacity duration-200"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
