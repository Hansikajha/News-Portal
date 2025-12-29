import React, { useEffect, useState } from "react";
import bhumika from "../assets/bhumika.jpg";
import christmas from "../assets/christmas.jpeg";
import fitness from "../assets/fitness.jpeg";
import food from "../assets/food.jpeg";
import school from "../assets/school.jpeg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.jpg";
import pic8 from "../assets/pic8.jpg";

export default function Trending() {

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
      title: "The Streaming Boom Is Slowing Down",
      desc: "Content saturation is changing audience behavior.",
    },
  ];

  const [trendingCards, setTrendingCards] = useState([]);

  useEffect(() => {
    const apiData = [
      {
        id: 1,
        image: food,
        title: "मुकबाड ट्रेन्ड : देखावटी खन्याउनाले के–के गर्छ हानि ?",
      },
      {
        id: 2,
        image: school,
        title: "क्यानभासमा ३०० वर्ष पुरानो ‘शताब्दी घर’",
      },
      {
        id: 3,
        image: fitness,
        title:
          "सामाजिक सञ्जालमा हाम्रो रुचिको ‘कन्टेन्ट’ मात्र किन बढी आउँछ ?",
      },
      {
        id: 4,
        image: christmas,
        title: "सान्ता क्लज : मिथकदेखि कोका–कोलाको विज्ञापनसम्म",
      },
    ];

    setTrendingCards(apiData);
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-6">

        {/* ===== Featured Section ===== */}
        <div className="space-y-8 mt-8">
          <div className="flex flex-col lg:flex-row items-stretch">
            <img
              src={bhumika}
              alt="Bhumika"
              className="w-full lg:w-1/2 h-80 object-cover rounded-l"
            />

            <div className="w-full lg:w-1/2 h-80 bg-gray-100 px-6 flex flex-col justify-center">
              <h3 className="text-4xl text-gray-800 font-bold mb-8 pl-5 tracking-wide hover:text-blue-500 cursor-pointer">
                बिनिता बाँच्न चाहन्छिन्
              </h3>
              <p className="text-md text-gray-800 leading-relaxed pl-5 tracking-wide">
                न्याय त भयो, तर समाजले बिनितालाई स्वीकार गर्न सकेन । <br />
                छिमेकीले उनलाई ‘बिग्रिएकी केटी’...
              </p>
            </div>
          </div>
        </div>

        {/* ===== Trending Grid (API .map()) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {trendingCards.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide pt-5 hover:text-blue-500 cursor-pointer">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* ===== Parenting / Lalan-Palan Section ===== */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-6">लालन-पालन</h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* Left Large */}
            <div className="lg:col-span-2 relative overflow-hidden rounded">
              <img
                src={food}
                alt="FOOD"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold hover:text-blue-500 cursor-pointer">
                बालबालिकालाई मोबाइल चलाउन नदिने होइन, सिकाउने हो
              </h3>
            </div>

            {/* Center */}
            <div className="relative overflow-hidden rounded">
              <img
                src={fitness}
                alt="FITNESS"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold hover:text-blue-500 cursor-pointer">
                कान नसुन्ने कुकुरका लागि सांकेतिक भाषामा गीत
              </h3>
            </div>

            {/* Right List */}
            <div className="space-y-6">
              {[food, fitness, christmas, food, school].map((img, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <img
                    src={img}
                    alt="side"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <p className="text-sm font-medium text-gray-800 leading-snug hover:text-blue-500 cursor-pointer">
                    अभिभावकमा धैर्यताको परीक्षा : बच्चाले भनेको मान्नै पर्ने ?
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Trending Grid (API .map()) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {trendingCards.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide pt-5 hover:text-blue-500 cursor-pointer">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>


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
              <img src={pic1} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-white">Holly Stapleton</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                8 Sex Myths That Experts Wish Would Go Away
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic2} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-white">Shannon Erickson</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                Can you get a full body workout in 20 minutes?
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic3} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-white">Matt Darty</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                How to Feel Alive Again
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic4} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-white">Chris Klein</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                How to Know If You Have Genetic Risk for Alzheimer's
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5th Part */}
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
                <h3 className="text-3xl text-white font-bold mb-4 hover:text-blue-500 cursor-pointer">
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

      {/* Wellness Section */}
      <div className="pt-10 mt-10 border-t border-gray-300">
        <div className="px-4 sm:px-6 lg:px-8 bg-gray-200">
          {/* Section title */}
          <h2 className="text-lg text-gray-800 font-bold tracking-wide uppercase mb-6 pt-8">
            Feature
          </h2>

          {/* Wellness cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            <div className="space-y-2">
              <img src={pic1} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-gray-800">Holly Stapleton</p>
              <p className="text-lg font-semibold leading-snug text-gray-800 hover:text-blue-500 cursor-pointer">
                8 Sex Myths That Experts Wish Would Go Away
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic2} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-gray-800">Shannon Erickson</p>
              <p className="text-lg font-semibold leading-snug text-gray-800 hover:text-blue-500 cursor-pointer">
                Can you get a full body workout in 20 minutes?
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic3} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-gray-800">Matt Darty</p>
              <p className="text-lg font-semibold leading-snug text-gray-800 hover:text-blue-500 cursor-pointer">
                How to Feel Alive Again
              </p>
            </div>

            <div className="space-y-2">
              <img src={pic4} className="w-full h-[400px] object-cover rounded" />
              <p className="text-xs text-white">Chris Klein</p>
              <p className="text-lg font-semibold leading-snug text-white hover:text-blue-500 cursor-pointer">
                How to Know If You Have Genetic Risk for Alzheimer's
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
