import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "How often should I get my dog groomed?",
    answer:
      "This depends on your dog’s breed, coat type, and lifestyle. On average, most dogs benefit from grooming every 4–8 weeks to keep their coat healthy and clean.",
  },
  {
    id: 2,
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we recommend booking in advance to secure your preferred time slot. Walk-ins may not always be available depending on our schedule.",
  },
  {
    id: 3,
    question: "What should I do before bringing my dog in?",
    answer:
      "Make sure your dog has had a short walk beforehand and has had a chance to go to the toilet. This helps them feel more relaxed during grooming.",
  },
  {
    id: 4,
    question: "Can you groom nervous or anxious dogs?",
    answer:
      "Yes, we take extra care with nervous dogs and aim to make the experience as calm and comfortable as possible. Let us know in advance so we can allow extra time if needed.",
  },
  {
    id: 5,
    question: "How long does a grooming session take?",
    answer:
      "The time varies depending on the service and your dog’s size and coat condition. Most appointments take between 1–3 hours.",
  },
  {
    id: 6,
    question: "What products do you use?",
    answer:
      "We use high-quality, dog-safe shampoos and grooming products that are gentle on your dog’s skin and coat.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!faqRef.current) return;

    gsap.fromTo(
      faqRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full bg-white px-6 py-16">
      <div ref={faqRef} className="mx-auto max-w-3xl">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-orange-500">
          FAQ
        </p>

        <h2 className="mb-10 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-600">Still have questions?</p>

          <a
            href="#contact"
            className="inline-block rounded-lg border border-black bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
