import { useState } from "react";
import { ChevronDown, Menu, X, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Games", "News", "Blog", "Services"];

  return (
    <nav className="flex justify-between items-center py-6 lg:py-8">
      {/* Logo */}
      <motion.div
        className="flex items-center cursor-pointer"
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-10 h-10 md:w-12 md:h-12 fill-white"
          style={{
            filter: "drop-shadow(0 0 6px rgba(205,22,28,0.5))",
          }}
        >
          <path d="M32,7c11.589,0,20,8.832,20,21c0,13.135-8.921,29-20,29S12,41.135,12,28C12,15.832,20.411,7,32,7z M29.423,31.474c0.236-0.708-0.084-1.482-0.752-1.816c-2.931-1.466-8.267-5.942-9.061-12.901C17.319,19.67,16,23.53,16,28c0,4.237,1.117,8.91,2.969,13.059C19.609,41.336,20.285,41.5,21,41.5C25.836,41.5,28.865,33.148,29.423,31.474z M45.031,41.059C46.883,36.91,48,32.237,48,28c0-4.47-1.319-8.33-3.61-11.242c-0.794,6.958-6.13,11.435-9.061,12.901c-0.668,0.334-0.988,1.108-0.752,1.816C35.135,33.148,38.164,41.5,43,41.5C43.715,41.5,44.391,41.336,45.031,41.059z" />
        </svg>
      </motion.div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide uppercase">
        {navItems.map((item, i) => (
          <a
            key={item}
            href="#"
            className="flex items-center text-white/80 hover:text-white transition-all duration-300 group relative"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            {item}
            <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        {/* Store Button */}
        <motion.a
          href="#"
          className="hidden sm:flex items-center gap-2 rounded-full px-6 py-2 font-bold uppercase tracking-wider text-sm bg-white text-black shadow-lg cursor-pointer"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 3,
            }}
          >
            <ShoppingBag className="w-4 h-4" />
          </motion.span>
          Store
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 z-50 glass-panel mx-4 rounded-xl p-6 md:hidden animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wide font-medium py-2 border-b border-white/10"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full px-6 py-2.5 font-bold uppercase tracking-wider text-sm bg-white text-black w-full mt-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Store
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
