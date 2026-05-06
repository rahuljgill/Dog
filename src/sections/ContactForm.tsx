import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current || !contactCardRef.current) return;

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      contactCardRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactCardRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    if (!enquiry.trim()) {
      setError("Please enter your enquiry.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/meenkbgl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSuccess("Your enquiry has been sent!");

      setEmail("");
      setPhoneNumber("");
      setEnquiry("");
    } catch {
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-linear-to-b from-orange-50 to-white px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-orange-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold">Get in Touch</h2>

          <p className="mt-3 text-gray-600">
            Have a question or want to book? Send us a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form
            ref={formRef}
            action="https://formspree.io/f/meenkbgl"
            method="POST"
            onSubmit={handleSubmit}
            className="rounded-2xl bg-gray-50 p-6 shadow-lg"
          >
            {error && (
              <p className="mb-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
                {error}
              </p>
            )}

            {success && (
              <p className="mb-4 rounded-lg bg-green-100 px-4 py-2 text-sm text-green-700">
                {success}
              </p>
            )}

            <div className="mb-4">
              <label className="mb-2 block font-semibold">Email *</label>

              <input
                name="email"
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold">
                Phone Number <span className="text-gray-400">(optional)</span>
              </label>

              <input
                name="phoneNumber"
                type="tel"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                placeholder="07123 456789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-semibold">Enquiry *</label>

              <textarea
                name="enquiry"
                className="min-h-36 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                placeholder="Tell us what your dog needs..."
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg border border-black bg-black px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Send Enquiry
            </button>
          </form>

          <div
            ref={contactCardRef}
            className="flex flex-col justify-center rounded-2xl bg-linear-to-br from-orange-100 to-yellow-50 p-6 shadow-lg"
          >
            <h3 className="mb-3 text-2xl font-bold">Prefer to message us?</h3>

            <p className="mb-6 text-gray-600">
              You can also contact us directly through social media or
              messaging.
            </p>

            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:scale-105"
              >
                <FaInstagram className="text-2xl" />

                <span className="font-semibold">DM us on Instagram</span>
              </a>

              <a
                href="https://wa.me/447123456789"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />

                <span className="font-semibold">Message us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
