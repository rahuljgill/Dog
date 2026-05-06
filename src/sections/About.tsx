import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dogGroomer from "../assets/dogGroomer.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section id="about" className="w-full bg-white px-6 py-16">
      <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-orange-500">
        About Us
      </p>

      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div ref={imageRef} className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={dogGroomer}
            alt="Dog Groomer"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div ref={textRef}>
          <h2 className="text-3xl font-bold text-gray-900">
            Professional dog grooming in Oxford
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Oxford Dog Grooming provides friendly, reliable grooming services
            for dogs of all sizes and coat types. Our goal is to keep every dog
            looking great while making sure they feel safe, relaxed, and cared
            for throughout the appointment.
          </p>

          <div className="mt-6 space-y-3">
            <p className="font-medium text-gray-700">
              ✓ Calm and caring environment
            </p>
            <p className="font-medium text-gray-700">
              ✓ Grooming tailored to each dog
            </p>
            <p className="font-medium text-gray-700">
              ✓ High-quality dog-safe products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
