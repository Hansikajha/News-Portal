import React, { useState, useEffect } from "react";
import health1 from "../assets/health1.png";
import health2 from "../assets/health2.jpeg";
import health3 from "../assets/health3.jpeg";
import health4 from "../assets/health4.jpeg";
import health5 from "../assets/health5.jpeg";
import health6 from "../assets/health6.jpeg";
import health7 from "../assets/health7.jpeg";

export default function Health() {

  const [trendingCards, setTrendingCards] = useState([]);

  useEffect(() => {
    const apiData = [
      {
        id: 1,
        image: health7,
        title: "यी हुन् विश्वका सबैभन्दा शक्तिशाली दश महिला इन्जिनियर",
      },
      {
        id: 2,
        image: health3,
        title: "चिनियाँ दुग्ध प्रविधि कहिले भित्र्याउने ?",
      },
      {
        id: 3,
        image: health6,
        title:
          "प्रविधिमार्फत समाज परिवर्तन गर्दै महिला",
      },
      {
        id: 4,
        image: health4,
        title: "टेक्सस कलेजमा विज्ञान प्रविधि मेला (तस्वीरहरू)",
      },
    ];

    setTrendingCards(apiData);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">

      {/* 1st Section */}
      <div className="space-y-8 mt-8">
        <div className="flex flex-col lg:flex-row items-stretch">
          <img
            src={health1}
            alt="Health 1"
            className="w-full lg:w-1/2 h-80 object-cover rounded-l"
          />

          <div className="w-full lg:w-1/2 h-80 bg-gray-100 px-6 flex flex-col justify-center space">
            <h3 className="text-4xl text-gray-800 font-bold mb-5 pl-5 tracking-wide hover:text-blue-500 cursor-pointer">
              स्वास्थ्य मन्त्रालय सिहंदरबारमा सारिँदै
            </h3>
            <p className="text-md text-gray-800 leading-relaxed pl-5 tracking-wide">
              स्वास्थ्य तथा जनसंख्या मन्त्रालय अबको केही हप्ताभित्रै सिंहदरबार परिसरभित्र सर्ने भएको छ ।
              जेनजी आन्दोलनको प्रदर्शनका क्रममा रामशाहपथस्थित भवन पूर्ण रूपमा क्षतिग्रस्त...
            </p>
          </div>
        </div>
      </div>

      {/* 2nd Part */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">

        {/* LEFT - Feature */}
        <div className="lg:col-span-6">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={health2}
              alt="main img"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 space-y-4">
              <span className="inline-block bg-yellow-400 text-xs font-semibold px-3 py-1 rounded">
                स्वस्थ
              </span>

              <h2 className="text-3xl font-bold leading-tight hover:text-blue-500 cursor-pointer">
                स्वस्थ जीवनशैली धेरै महत्त्वपूर्ण छ।
              </h2>

              <p className="text-gray-700 leading-relaxed">
                १ पुष, काठमाडौं। आर्सनल क्रिस्टल प्यालेसलाई पेनाल्टी सुटआउटको
                सडन डेथमा हराउँदै इंग्लिस एफए कपको सेमिफाइनलमा स्थान बनाएको छ।
              </p>
            </div>
          </div>
        </div>

        {/* Middle Part */}
        <div className="lg:col-span-4 space-y-13">
          <div className="flex gap-4 border-b border-gray-400 pb-4">
            <div className="flex-1">
              <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                इन्डोनेसियाका प्रियान्दोनले एक ओभरमा पाँच विकेट लिएर बनाए विश्व कीर्तिमान
              </h3>
            </div>
            <img src={health3} className="w-28 h-20 object-cover rounded" />
          </div>

          <div className="flex gap-4 border-b border-gray-400 pb-4">
            <div className="flex-1">
              <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                पारा तेक्वान्दोमा कार्य विजेता रेञ्जुलाई राष्ट्रपतिको बधाई
              </h3>
            </div>
            <img src={health4} className="w-28 h-20 object-cover rounded" />
          </div>

          <div className="flex gap-4 border-b border-gray-400 pb-4">
            <div className="flex-1">
              <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                एसियाली वाइल्डकार्ड च्याम्पियनसिपमा नेपाली खेलाडीलाई दुई पदक
              </h3>
            </div>
            <img src={health5} className="w-28 h-20 object-cover rounded" />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                महिला टी–२० विश्वकप छनोटको समूह र खेलतालिका सार्वजनिक
              </h3>
            </div>
            <img src={health6} className="w-28 h-20 object-cover rounded" />
          </div>
        </div>

        {/* Right-List */}
        <div className="lg:col-span-2 border-l border-gray-400 pl-4 space-y-5">
          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">
              १
            </span>
            <p className="text-sm font-meduim leading-snug hover:text-blue-500 cursor-pointer">
              नेपालमै पहिलो ह्वीलचेयर रग्बी खेल सम्पन्न
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">
              २
            </span>
            <p className="text-sm font-medium leading-snug hover:text-blue-500 cursor-pointer">
              ट्रफी विजेता हिमाली जिल्ला स्कुललाई पुग्यो लाइसेन्स
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">
              ३
            </span>
            <p className="text-sm font-medium leading-snug hover:text-blue-500 cursor-pointer">
              अन्तर विद्यालयस्तरीय कबड्डीको उपाधि न्यू होराइजनलाई
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">४</span>
            <p className="text-sm font-medium leading-snug hover:text-blue-500 cursor-pointer">
              मिस्टर महानगर शारीरिक सुगठन च्याम्पियनसिप जेठ अन्त्यमा
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">५</span>
            <p className="text-sm font-medium leading-snug hover:text-blue-500 cursor-pointer">
              आज एलपीजी ‘एनपीएल नाइट’ हुँदै
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">
              ६
            </span>
            <p className="text-sm font-meduim leading-snug hover:text-blue-500 cursor-pointer">
              नेपालमै पहिलो ह्वीलचेयर रग्बी खेल सम्पन्न
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">
              ७
            </span>
            <p className="text-sm font-meduim leading-snug hover:text-blue-500 cursor-pointer">
              मिस्टर महानगर शारीरिक सुगठन च्याम्पियनसिप जेठ अन्त्यमा
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-xl font-bold text-blue-400">
              ८
            </span>
            <p className="text-sm font-meduim leading-snug hover:text-blue-500 cursor-pointer">
              आज एलपीजी ‘एनपीएल नाइट’ हुँदै
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

      {/* 2nd part*/}
      <hr className="border-gray-300 mt-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
        <div className="flex gap-4 border-r border-r-gray-400">
          <img
            src={health1}
            alt="Headline"
            className="w-28 h-38 object-cover rounded"
          />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-blue-500 uppercase">
              The Headlines
            </p>
            <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
              Microsoft hires OpenAI's ousted C.E.O., and more.
            </h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus adipisci id sapiente non blanditiis.....</p>
          </div>
        </div>

        <div className="flex gap-4 border-r border-r-gray-400">
          <img
            src={health3}
            alt="Headline"
            className="w-28 h-38 object-cover rounded"
          />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-blue-500 uppercase">
              Technology
            </p>
            <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
              The latest on AI, startups, and the race for innovation.
            </h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus adipisci id sapiente non blanditiis.....</p>
          </div>
        </div>

        <div className="flex gap-4">
          <img
            src={health2}
            alt="Headline"
            className="w-28 h-38 object-cover rounded"
          />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-blue-500 uppercase">
              The Headlines
            </p>
            <h3 className="text-lg font-semibold leading-snug hover:text-blue-500 cursor-pointer">
              Microsoft hires OpenAI's ousted C.E.O., and more.
            </h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus adipisci id sapiente non blanditiis.....
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

