import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Page wrapper component
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen flex flex-col niveau-font">
      <style jsx>{`
            /* Grift Font Face - Light */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-light.otf") format("opentype"),
                url("./fonts/grift-light.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Light Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-lightitalic.otf") format("opentype"),
                url("./fonts/grift-lightitalic.ttf") format("truetype");
              font-weight: 300;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Regular */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-black.otf") format("opentype"),
                url("./fonts/grift-black.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-italic.otf") format("opentype"),
                url("./fonts/grift-italic.ttf") format("truetype");
              font-weight: 400;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Medium */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-medium.otf") format("opentype"),
                url("./fonts/grift-medium.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Medium Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-mediumitalic.otf") format("opentype"),
                url("./fonts/grift-mediumitalic.ttf") format("truetype");
              font-weight: 500;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Bold */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-bold.otf") format("opentype"),
                url("./fonts/grift-bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Bold Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-bolditalic.otf") format("opentype"),
                url("./fonts/grift-bolditalic.ttf") format("truetype");
              font-weight: 700;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Extrabold */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extrabold.otf") format("opentype"),
                url("./fonts/grift-extrabold.ttf") format("truetype");
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Extrabold Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extrabolditalic.otf") format("opentype"),
                url("./fonts/grift-extrabolditalic.ttf") format("truetype");
              font-weight: 800;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Extralight */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extralight.otf") format("opentype"),
                url("./fonts/grift-extralight.ttf") format("truetype");
              font-weight: 200;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Extralight Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extralightitalic.otf") format("opentype"),
                url("./fonts/grift-extralightitalic.ttf") format("truetype");
              font-weight: 200;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Black */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-blackitalic.otf") format("opentype"),
                url("./fonts/grift-blackitalic.ttf") format("truetype");
              font-weight: 900;
              font-style: italic;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Regular */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/NiveauGroteskRegular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Bold */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/Niveau Grotesk Bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .grift-font {
              font-family: "Grift", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .niveau-font {
              font-family: "Niveau Grotesk", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
