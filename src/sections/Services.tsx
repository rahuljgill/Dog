import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dogBath from "../assets/dogBath.png";
import dogHaircut from "../assets/dogHaircut.png";
import dogNails from "../assets/dogNails.png";
import ServiceModal from "../components/ServiceModal";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  process: string[];
  image: string;
  extraInfo?: string;
};

function Services() {
  const sectionContentRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (!sectionContentRef.current) return;

    gsap.fromTo(
      sectionContentRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionContentRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  const services: Service[] = [
    {
      id: "nails",
      title: "Nail Trimming",
      price: "From £10",
      description: "Quick and gentle nail care to keep your dog comfortable.",
      process: ["Trim nails", "Smooth edges", "Check paws"],
      image: dogNails,
    },
    {
      id: "bath",
      title: "Bath & Dry",
      price: "From £25",
      description: "A refreshing wash followed by a full blow dry and brush.",
      process: ["Wash", "Shampoo", "Blow dry", "Brush"],
      image: dogBath,
      extraInfo: "Includes gentle shampoo and a soft coat finish.",
    },
    {
      id: "haircut",
      title: "Haircut",
      price: "From £40",
      description: "Professional trimming and styling tailored to your dog.",
      process: ["Consult", "Trim", "Style", "Finish"],
      image: dogHaircut,
      extraInfo: "Style can be adjusted based on breed and coat type.",
    },
  ];

  const cardStyle =
    "p-6 shadow-lg hover:shadow-2xl rounded-xl bg-white cursor-pointer transform transition-all duration-300 hover:scale-105 flex flex-col items-center text-center";

  const buttonStyle =
    "mt-4 px-4 py-2 bg-black text-white rounded-lg border border-black transition-all duration-300 hover:bg-white hover:text-black";

  return (
    <section
      id="services"
      className="w-full bg-linear-to-b from-white to-orange-50 px-6 py-16"
    >
      <div ref={sectionContentRef} className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-orange-500">
          Services
        </p>

        <h2 className="mb-12 text-3xl font-bold">Our Services</h2>

        <div className="grid gap-8 rounded-xl bg-white p-8 shadow-lg hover:shadow-2xl md:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className={cardStyle}>
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4"
              />

              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>

              <p className="text-gray-600">{service.description}</p>

              <p className="mt-3 text-lg font-semibold">{service.price}</p>

              <button
                className={buttonStyle}
                onClick={() => setSelectedService(service)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Services;
