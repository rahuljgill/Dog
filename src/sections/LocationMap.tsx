import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LocationMap() {
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!infoRef.current || !mapRef.current) return;

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section id="location" className="w-full bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Location
          </p>

          <h2 className="text-3xl font-bold">Find Us in Oxford</h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            We are based near Oxford City Centre. Get in touch before visiting
            so we can confirm availability.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gray-50 shadow-xl">
          <div className="grid md:grid-cols-3">
            <div ref={infoRef} className="space-y-6 p-8 md:col-span-1">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Address
                </h3>

                <p className="mt-2 font-medium text-gray-900">
                  Oxford City Centre
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Opening Hours
                </h3>

                <p className="mt-2 text-gray-700">Mon–Fri: 9:00am – 5:00pm</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Contact
                </h3>

                <p className="mt-2 text-gray-700">07123 456789</p>
              </div>
            </div>

            <div ref={mapRef} className="md:col-span-2">
              <iframe
                src="https://www.google.com/maps?q=Oxford%20City%20Centre&output=embed"
                className="h-87.5 w-full border-0 md:h-112.5"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
