import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dogVideo from "../assets/dog.mp4";
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
        { scale: 1, duration: 3, ease: "power2.out" },
      );
    }
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Navbar />

        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={dogVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="mb-4 text-4xl font-bold">Oxford Dog Grooming</h1>
          <p className="text-lg">
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
      <footer className="w-full bg-black text-white py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-400">
          © 2026 Oxford Dog Grooming. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
