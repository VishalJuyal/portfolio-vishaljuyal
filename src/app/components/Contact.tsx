"use client";
import React, { useState } from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

function Contact() {
  const [preference, setPreference] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreference(e.target.value);
  };

  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-4 sm:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <a href="tel:+919871560356" className="flex items-center">
              <Image
                src={phone}
                alt="phone"
                width={50}
                height={50}
                className="mr-6 cursor-pointer"
              />
              <span className="text-xl hover:text-orange-400">
                +91 9871560356
              </span>
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="mailto:vishaljuyal21@gmail.com"
              className="flex items-center"
            >
              <Image
                src={mail}
                alt="mail"
                width={50}
                height={50}
                className="mr-6 cursor-pointer"
              />
              <span className="text-xl hover:text-orange-400">
                vishaljuyal21@gmail.com
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-white/10 p-4 sm:p-6 rounded-xl max-w-full lg:max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and let&apos;s schedule a call!
        </p>
        <form
          action="https://getform.io/f/bmddxera"
          method="POST"
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-500"
              placeholder="First Name"
              name="first_name"
              required
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-500"
              placeholder="Last Name"
              name="last_name"
              required
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-500"
              placeholder="Email"
              name="email"
              type="email"
              required
            />
            <select
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-500"
              name="preference"
              value={preference}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a preference
              </option>
              <option value="call">Schedule a Call</option>
              <option value="email">Email</option>
            </select>
          </div>
          <textarea
            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-500"
            placeholder="Your Message"
            name="message"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
