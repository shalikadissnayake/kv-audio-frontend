import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-black text-white min-h-screen px-4 py-20">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-300 text-lg">
          Have questions or need help? Fill out the form and our team will get back to you.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-yellow-400" />
            <div>
              <p className="font-semibold text-white">Head Office</p>
              <p className="text-gray-300">123 Galle Rd, Kollupitiya, Sri Lanka</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1 text-yellow-400" />
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-gray-300">+94 11 234 5678</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-yellow-400" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-gray-300">kvaudiosystem@shop.lk</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="mt-1 text-yellow-400" />
            <div>
              <p className="font-semibold text-white">Working Hours</p>
              <p className="text-gray-300">Mon - Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-blue-200 p-6 md:p-8 rounded-2xl shadow-lg space-y-6 text-black">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-blue-800 hover:text-white text-black font-semibold py-3 rounded-xl transition-all shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
