import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import dogVideo from "../assets/dog.mp4";
import Fallback from "../assets/Fallback.png";

import Navbar from "../components/Navbar";

import Services from "../sections/Services";
import FAQ from "../sections/FAQ";
import ContactForm from "../sections/ContactForm";
import Reviews from "../sections/Reviews";
import LocationMap from "../sections/LocationMap";
import About from "../sections/About";

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.3 },
        {
          scale: 1,
          duration: 3,
          ease: "power2.out",
        },
      );
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/6a070ce798f1241c34cac50d/1jolokq2q";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[100svh] w-full overflow-hidden"
      >
        <Navbar />

        {/* Mobile fallback image */}
        <img
          src={Fallback}
          alt="Dog Grooming"
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />

        {/* Desktop video */}
        <video
          ref={videoRef}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          src={dogVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex h-[100svh] flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Oxford Dog Grooming
          </h1>

          <p className="max-w-xl text-base text-gray-200 md:text-lg">
            We provide the best grooming services for your beloved pets.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Location Map Section */}
      <LocationMap />

      {/* Footer */}
      <footer className="w-full bg-black py-8 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-400">
          © 2026 Oxford Dog Grooming. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
