import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="space-y-6 mt-10 lg:mt-0">
      <div className="space-y-1">
        <p className="text-xs tracking-[0.2em] font-bold text-gray-300 uppercase ml-1">
          Marvel
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-white uppercase tracking-tighter leading-[0.85] animate-text-glow">
          Spider-Man
        </h1>
        <h2
          className="text-2xl md:text-3xl text-red-300 italic uppercase tracking-wider -mt-1 ml-1"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Bahlil Morales
        </h2>
      </div>
      <p className="text-sm md:text-base text-gray-200 leading-relaxed font-light max-w-md opacity-90">
        Experience the rise of Bahlil Morales as the new hero masters
        incredible, explosive new powers to become his own Spider-Man.
      </p>
      <div className="pt-4">
        <button className="btn-glow bg-white text-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg shadow-black/30 uppercase tracking-widest text-sm flex items-center gap-2 group cursor-pointer">
          <span className="relative z-10 flex items-center gap-2">
            Pre-Order Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
}
