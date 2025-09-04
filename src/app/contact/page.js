"use client";
import React, { useState } from "react";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (API call or email)
    alert("Message sent! Thank you.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-28 min-h-screen bg-light-background flex flex-col items-center px-4 sm:px-6 lg:px-20 py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-light-primary mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-700 mb-12 text-center max-w-2xl">
        Have questions or want to get in touch? Fill out the form below or reach
        us through our contact information.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
        <div className="text-center">
          <h3 className="font-semibold text-lg text-light-primary mb-1">Email</h3>
          <p className="text-gray-700">info@yourdomain.com</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-light-primary mb-1">Phone</h3>
          <p className="text-gray-700">+212 123 456 789</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-light-primary mb-1">Address</h3>
          <p className="text-gray-700">Casablanca, Morocco</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-primary"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-primary"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-primary resize-none"
        />
        <button
          type="submit"
          className="bg-light-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
