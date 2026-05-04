import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ReviewSidebar } from "./components/sections/ReviewSidebar";
import { Footer } from "./components/layout/Footer";
import { Preloader } from "./components/Preloader";
import UnicornScene from "unicornstudio-react";

function App() {
  const [loading, setLoading] = useState(true);
  const ready = !loading;

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* ====== BACKGROUND LAYERS ====== */}

      {/* Unicorn Studio WebGL Scene — Full-screen background (slides up) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0, y: 60 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <UnicornScene
          projectId="cvWBZ7SfuPoUDyP75VK2"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
        />
      </motion.div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-spider-texture opacity-20 pointer-events-none mix-blend-overlay z-[1]" />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 pointer-events-none z-[2]" />

      {/* Extra left-side readability gradient */}
      <div className="absolute inset-y-0 left-0 w-[45%] bg-linear-to-r from-background-light/95 to-transparent pointer-events-none z-[2]" />

      {/* Ambient red glow (top-left) */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-700/15 blur-[120px] pointer-events-none z-[3] animate-hero-glow" />

      {/* Ambient dark glow (bottom-right) */}
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-black/30 blur-[100px] pointer-events-none z-[3]" />

      {/* ====== MAIN CONTENT ====== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-screen flex flex-col">
        {/* Navbar — slides down from top */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Navbar />
        </motion.div>

        <main className="grow grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative">
          {/* Hero — slides in from left */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center z-20 order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>

          {/* Spacer for Unicorn background */}
          <div className="lg:col-span-4 order-1 lg:order-2" />

          {/* ReviewSidebar — slides in from right */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-center z-20 order-3"
            initial={{ opacity: 0, x: 100 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          >
            <ReviewSidebar />
          </motion.div>
        </main>

        {/* Footer — slides up from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default App;
