"use client";

import { useEffect, useRef } from "react";

export default function LoginCard({ isOpen, onClose }) {
  const modalRef = useRef();

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl"
        >
          ←
        </button>

        {/* <div className="flex justify-center mb-4">
          <img src="/blinkit.png" alt="Logo" className="h-12" />
        </div> */}

        {/* <h2 className="text-2xl font-bold text-center">
          India's last minute app
        </h2> */}
        <p className="text-center text-gray-500 mb-4">Log in or Sign up</p>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
          <span className="px-3 text-gray-700 font-medium">+91</span>
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="flex-1 px-3 py-2 outline-none text-gray-800"
            maxLength={10}
          />
        </div>

        <button
          type="button"
          className="w-full bg-gray-400 text-white font-semibold py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Continue
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Terms of service
          </a>{" "}
          &{" "}
          <a href="#" className="underline">
            Privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}
