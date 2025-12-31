import React from "react";
import gold from "../assets/gold.png"
import Trading from "../components/Trading";
import TradingOverview from "../components/TradingOverview";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic1.jpg";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.jpg";
import pic8 from "../assets/pic8.jpg";
import pic5 from "../assets/pic5.jpg";
import ForexCrossRates from "../components/ForexCrossRates";
import Screener from "../components/Screener";
import congress from "../assets/congress.jpg";
import election from "../assets/election.jpg";
import latestnewsimg2 from "../assets/latestnewsimg2.jpg";
import adsbanner from "../assets/adsbanner.png";


export default function Business() {

  const sidebarData = [
    {
      title: "Every Star Wants A Documentary Now. But Is It Just P.R.?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "The Streaming Boom Is Slowing Down",
      desc: "Content saturation is changing audience behavior.",
    },
    {
      title: "Why Sports Docs Are Everywhere",
      desc: "Behind the surge in athlete-driven storytelling.",
    },
    {
      title: "Every Star Wants A Documentary Now. But Is It Just P.R.?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "The Streaming Boom Is Slowing Down",
      desc: "Content saturation is changing audience behavior.",
    },
    {
      title: "Why Sports Docs Are Everywhere",
      desc: "Behind the surge in athlete-driven storytelling.",
    },
    {
      title: "The Streaming Boom Is Slowing Down",
      desc: "Content saturation is changing audience behavior.",
    },
  ];

  const newsData = [
    {
      img: congress,
      title: "यी हुन् इन्दुप्रभाबाट केन्द्रमा सिफारिस भएका कांग्रेसका उम्मेदवारहरू (सूची)",
    },
    {
      img: election,
      title: "सरकारका ५ जना उद्धारकर्ता र खेलाडीलाई सिधै ग्रुप मिसनमा अवसर",
    },
    {
      img: latestnewsimg2,
      title: "एमाले मतगणना अपडेट : १० वटा मतपेटिकाको चिठ्ठा निकाल्न बाँकी, सबै परिणाम एकसाथ सुनाउने",
    },
    {
      img: latestnewsimg2,
      title: "एमाले मतगणना अपडेट : १० वटा मतपेटिकाको चिठ्ठा निकाल्न बाँकी, सबै परिणाम एकसाथ सुनाउने",
    },
    {
      img: congress,
      title: "यी हुन् इन्दुप्रभाबाट केन्द्रमा सिफारिस भएका कांग्रेसका उम्मेदवारहरू (सूची)",
    },
    {
      img: election,
      title: "सरकारका ५ जना उद्धारकर्ता र खेलाडीलाई सिधै ग्रुप मिसनमा अवसर",
    },
  ];

  return (
    <>
      {/* Trding Chart */}
      <Trading />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-gray-800 text-6xl font-extrabold p-5 leading-relaxed text-center border-b border-gray-400 hover:text-blue-500 cursor-pointer">
          सुन फेरि २ लाख ६० हजार नाघ्यो, चाँदी हालसम्मकै उच्च
        </h1>

        {/* Advertisement banner */}
        <div className="max-w-full h-[100px] my-5">
          <img
            src={adsbanner}
            alt="Advertisement"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        <div className="space-y-8 mt-8">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Image */}
            <img
              src={gold}
              alt="Gold"
              className="w-full lg:w-1/2 h-80 object-cover rounded-l mt-5 lg:mt-0"
            />

            {/* Right Content */}
            <div className="w-full lg:w-1/2 h-80 bg-gray-100 px-6 flex flex-col justify-center">
              <h3 className="text-4xl text-gray-800 font-bold mb-4 tracking-wide hover:text-blue-500 cursor-pointer">
                यस्तो छ आज सागसब्जी र फलफूलको थोक मूल्य
              </h3>
              <p className="text-md text-gray-800 leading-relaxed tracking-wide">
                ३ पुष, काठमाडौं। कालिमाटी फलफूल तथा तरकारी बजार विकास समितिले
                आजका लागि कृषिजन्य...
              </p>
            </div>
          </div>

        </div>

        {/* Trading Overview */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9">
            <TradingOverview />
          </div>

          <div className="lg:col-span-3 space-y-6">
            {sidebarData.map((item, index) => (
              <div key={index}>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold hover:text-blue-500 cursor-pointer">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>

                {index !== sidebarData.length - 1 && (
                  <hr className="border-gray-300 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Advertisement banner */}
      <div className="max-w-full h-[100px] my-5">
        <img
          src={adsbanner}
          alt="Advertisement"
          className="mx-auto max-w-full h-auto"
        />
      </div>

      {/* Wellness Section */}
      <div className="pt-10 mt-10 border-t border-gray-300">
        <div className="px-4 sm:px-6 lg:px-8 bg-gray-800">
          {/* Section title */}
          <h2 className="text-lg text-white font-bold tracking-wide uppercase mb-6 pt-8">
            Feature
          </h2>

          {/* Wellness cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            <div className="space-y-2">
              <img src={pic1} className="w-full h-40 object-cover rounded" />
              <p className="text-xs text-white">Holly Stapleton</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                8 Sex Myths That Experts Wish Would Go Away
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic2} className="w-full h-40 object-cover rounded" />
              <p className="text-xs text-white">Shannon Erickson</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                Can you get a full body workout in 20 minutes?
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic3} className="w-full h-40 object-cover rounded" />
              <p className="text-xs text-white">Matt Darty</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                How to Feel Alive Again
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic4} className="w-full h-40 object-cover rounded" />
              <p className="text-xs text-white">Chris Klein</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                How to Know If You Have Genetic Risk for Alzheimer's
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4th Part */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT SIDE (3 columns) */}
          <div className="lg:col-span-3 space-y-8 mt-8">

            {/* Image + Content */}
            <div className="flex flex-col lg:flex-row items-stretch">
              <img
                src={pic8}
                alt="News"
                className="w-full lg:w-1/2 h-80 object-cover rounded-l"
              />

              <div className="w-full lg:w-1/2 h-80 bg-blue-500 px-6 flex flex-col justify-center rounded-r">
                <h3 className="text-3xl text-white font-bold mb-4 hover:text-gray-800 cursor-pointer">
                  यस्तो छ आज सागसब्जी र फलफूलको थोक मूल्य
                </h3>
                <p className="text-md text-white leading-relaxed">
                  ३ पुष, काठमाडौं। कालिमाटी फलफूल तथा तरकारी बजार विकास समितिले
                  आजका लागि कृषिजन्य...
                </p>
              </div>
            </div>

            {/* Headline grid UNDER left content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="flex gap-4">
                <img
                  src={pic1}
                  alt="Headline"
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    The Headlines
                  </p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                    Microsoft hires OpenAI's ousted C.E.O., and more.
                  </h3>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src={pic2}
                  alt="Headline"
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    The Headlines
                  </p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                    Microsoft hires OpenAI's ousted C.E.O., and more.
                  </h3>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src={pic3}
                  alt="Headline"
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    The Headlines
                  </p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                    Microsoft hires OpenAI's ousted C.E.O., and more.
                  </h3>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src={pic4}
                  alt="Headline"
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    The Headlines
                  </p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                    Microsoft hires OpenAI's ousted C.E.O., and more.
                  </h3>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src={pic5}
                  alt="Headline"
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    The Headlines
                  </p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                    Microsoft hires OpenAI's ousted C.E.O., and more.
                  </h3>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src={pic8}
                  alt="Headline"
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    Technology
                  </p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                    The latest on AI, startups, and the race for innovation.
                  </h3>
                  <p className="text-xs text-gray-500">45 mins ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (2 columns — COMPLETE RIGHT) */}
          <div className="lg:col-span-2 space-y-6 mt-8">
            {sidebarData.map((item, index) => (
              <div key={index}>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold hover:text-blue-500 cursor-pointer">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>

                {index !== sidebarData.length - 1 && (
                  <hr className="border-gray-300 mt-6" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      <hr className="border-gray-300 my-0" />

      {/* Advertisement banner */}
      <div className="max-w-full h-[100px] my-5">
        <img
          src={adsbanner}
          alt="Advertisement"
          className="mx-auto max-w-full h-auto"
        />
      </div>

      {/* Market Widgets */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Forex Cross Rates */}
          <ForexCrossRates />

          {/* Screener */}
          <Screener />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {newsData.map((item, index) => (
            <div key={index} className="space-y-3">
              <img
                src={item.img}
                alt="News"
                className="w-full h-56 object-cover rounded"
              />

              <h3 className="text-base font-semibold leading-snug text-gray-700 mt-5 hover:text-blue-500 cursor-pointer">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}