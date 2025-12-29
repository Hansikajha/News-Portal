import React from "react";
import { Link } from "react-router-dom";
import signupimg from "../assets/signupimg.jpeg";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden my-10">

        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={signupimg}
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIght Form */}
        <div className="text-sm text-gray-500 my-6 px-5 flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Create Your Account
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            please enter your details
          </p>

          {/* Google Sign Up */}
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-2 mb-6 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Sign Up with Google</span>
          </button>

          <div className="text-center text-sm text-gray-400 mb-6">Or</div>

          {/* Email */}
          <div className="w-full text-left">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#d9a066]"
            />

            {/* Username */}
            <label className="text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="name"
              placeholder="username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#d9a066]"
            />

          {/* Password */}
            <label className="text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#d9a066]"
            />

            {/* Confirm Password */}
            <label className="text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#d9a066]"
            />
          </div>

          {/* Create Account */}
          <button className="w-full bg-[#d9a066] text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Create Account
          </button>

          {/* Sign In */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-gray-800 cursor-pointer hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

