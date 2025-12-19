import React from "react";
import gold from "../assets/gold.png"

export default function Business() {
  return (
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-gray-800 text-6xl font-extrabold p-5 leading-relaxed text-center border-b border-gray-400">
          सुन फेरि २ लाख ६० हजार नाघ्यो, चाँदी हालसम्मकै उच्च   
        </h1>

        <div className="space-y-8 mt-8">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Image */}
            <img
              src={gold}
              alt="Gold"
              className="w-full lg:w-1/2 h-80 object-cover rounded mt-5 lg:mt-0"
            />

            {/* Right Content */}
            <div className="w-full lg:w-1/2 h-80 bg-gray-100 px-6 flex flex-col justify-center">
              <h3 className="text-3xl text-gray-800 font-bold mb-4">
                यस्तो छ आज सागसब्जी र फलफूलको थोक मूल्य
              </h3>
              <p className="text-md text-gray-800 leading-relaxed">
                ३ पुष, काठमाडौं। कालिमाटी फलफूल तथा तरकारी बजार विकास समितिले
                आजका लागि कृषिजन्य...
              </p>
            </div>
          </div>

        </div>
      </section>
  );
}