"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitPromise = fetch(
      "https://script.google.com/macros/s/AKfycbzSy9wRxtZvdUQHrJDmMtKp6A8i5xBacW1DbEdTCzw7l7iCzJA54qKTAy16OPsRvwae/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    );

    toast
      .promise(
        submitPromise.then(async (res) => {
          const data = await res.json();
          if (data.success) {
            setFormData({ name: "", email: "", message: "" });
            return "Message sent successfully!";
          } else {
            throw new Error(data.message ?? "Something went wrong.");
          }
        }),
        {
          loading: "Sending message...",
          success: "Thank you! Your message has been successfully sent.", // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: (err: any) => err.message ?? "Failed to send message",
        }
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        console.error("Form submission error:", err);
      });
  };

  return (
    <section
      className="py-12 px-4 sm:py-16 sm:px-6 text-white"
      id="contact"
    >
      <div className="mt-16">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
            data-aos="fade-down"
          >
            Get in Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-xl border border-white/20 shadow-lg text-[#101010]"
            data-aos="fade-up"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 mb-4 bg-transparent border border-gray-500 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 mb-4 bg-transparent border border-gray-500 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 mb-4 bg-transparent border border-gray-500 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none h-32 sm:h-40"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
