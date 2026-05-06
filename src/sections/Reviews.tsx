import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const reviews = [
  {
    id: 1,
    name: "Amy W.",
    rating: 5,
    review:
      "Absolutely amazing service. My dog looked fantastic afterwards and was so relaxed when I picked him up.",
    avatarColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "James T.",
    rating: 5,
    review:
      "Very professional and friendly team. Booking was easy and the grooming quality was excellent.",
    avatarColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Sarah L.",
    rating: 5,
    review:
      "Highly recommend Oxford Dog Grooming. They took great care of my dog and the results were perfect.",
    avatarColor: "bg-purple-500",
  },
  {
    id: 4,
    name: "Daniel R.",
    rating: 5,
    review:
      "Lovely service from start to finish. My dog came back clean, happy, and looking amazing.",
    avatarColor: "bg-orange-500",
  },
  {
    id: 5,
    name: "Megan P.",
    rating: 5,
    review:
      "Really caring and professional. They took their time and made my nervous dog feel comfortable.",
    avatarColor: "bg-pink-500",
  },
  {
    id: 6,
    name: "Oliver B.",
    rating: 5,
    review:
      "Great experience. Friendly team, fair prices, and my dog looked brilliant afterwards.",
    avatarColor: "bg-teal-500",
  },
];

function Reviews() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!cardsRef.current) return;

      gsap.to(cardsRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.5,
        ease: "power2.inOut",
        // below is GSAP callback that runs after the animation above completes
        onComplete: () => {
          setStartIndex((prev) => (prev + 1) % reviews.length);

          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="w-full bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm  text-center font-semibold uppercase tracking-widest text-orange-500">
          Testimonials
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${review.avatarColor}`}
                >
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold">{review.name}</h3>

                  <div className="text-yellow-500">
                    {"⭐".repeat(review.rating)}
                  </div>
                </div>
              </div>

              <p className="leading-relaxed text-gray-600">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://google.com"
            target="_blank"
            className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-lg text-yellow-400">⭐</span>

            <span className="font-semibold text-gray-800">
              View More Reviews on
            </span>

            <span className="font-bold">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
