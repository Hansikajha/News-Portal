import React, { useEffect, useState } from "react";
import cricket from "../assets/cricket.jpg";
import sports1 from "../assets/sports1.jpeg";
import sports2 from "../assets/sports2.jpeg";
import sports3 from "../assets/sports3.jpeg";
import sports4 from "../assets/sports4.jpeg";
import sports5 from "../assets/sports5.jpeg";
import sports6 from "../assets/sports6.jpeg";
import adsbanner from "../assets/adsbanner.png";

export default function Sports() {

  const [trendingCards, setTrendingCards] = useState([]);

  useEffect(() => {
    const apiData = [
      {
        id: 1,
        image: sports1,
        title: "मुकबाड ट्रेन्ड : देखावटी खन्याउनाले के–के गर्छ हानि ?",
      },
      {
        id: 2,
        image: sports2,
        title: "क्यानभासमा ३०० वर्ष पुरानो ‘शताब्दी घर’",
      },
      {
        id: 3,
        image: sports3,
        title:
          "सामाजिक सञ्जालमा हाम्रो रुचिको ‘कन्टेन्ट’ मात्र किन बढी आउँछ ?",
      },
      {
        id: 4,
        image: sports4,
        title: "सान्ता क्लज : मिथकदेखि कोका–कोलाको विज्ञापनसम्म",
      },
    ];

    setTrendingCards(apiData);
  }, []);
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-6">

        {/* Advertisement banner */}
        <div className="max-w-full h-[100px] my-5">
          <img
            src={adsbanner}
            alt="Advertisement"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        {/* 1st Section */}
        <div className="space-y-8 mt-8">
          <div className="flex flex-col lg:flex-row items-stretch">
            <img
              src={cricket}
              alt="Womens Cricket"
              className="w-full lg:w-1/2 h-80 object-cover rounded-l"
            />

            <div className="w-full lg:w-1/2 h-80 bg-gray-100 px-6 flex flex-col justify-center space">
              <h3 className="text-4xl text-gray-800 font-bold mb-5 pl-5 tracking-wide hover:text-blue-500 cursor-pointer">
                नयाँ प्रशिक्षकको आगमनले उत्साहित महिला क्रिकेट टिम, विश्वकप खेल्ने लक्ष्य
              </h3>
              <p className="text-md text-gray-800 leading-relaxed pl-5 tracking-wide">
                घरेलु मैदानमै हुने छनोट प्रतियोगिता खेल्न कप्तान इन्दुदेखि लिएर युवा खेलाडीहरू पनि उत्साहित छन् ।
                नयाँ प्रशिक्षक हर्षल पाठकको आगमनले पनि त्यसमा ऊर्जा थपेको...
              </p>
            </div>
          </div>
        </div>

        {/* 2nd part*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          <div className="flex gap-4 border-r border-r-gray-400">
            <img
              src={sports5}
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
              src={sports6}
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
              src={sports1}
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
        <hr className="border-gray-300 my-7" />

        {/* 3rd Part */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">

          {/* LEFT - Feature */}
          <div className="lg:col-span-6">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={sports2}
                alt="main img"
                className="w-full h-72 object-cover"
              />

              <div className="p-6 space-y-4">
                <span className="inline-block bg-yellow-400 text-xs font-semibold px-3 py-1 rounded">
                  आर्सनल
                </span>

                <h2 className="text-3xl font-bold leading-tight hover:text-blue-500 cursor-pointer">
                  क्रिस्टल प्यालेसलाई सडन डेथमा हराउँदै आर्सनल एफए कपको सेमिफाइनलमा
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
              <img src={sports3} className="w-28 h-20 object-cover rounded" />
            </div>

            <div className="flex gap-4 border-b border-gray-400 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                  पारा तेक्वान्दोमा कार्य विजेता रेञ्जुलाई राष्ट्रपतिको बधाई
                </h3>
              </div>
              <img src={sports4} className="w-28 h-20 object-cover rounded" />
            </div>

            <div className="flex gap-4 border-b border-gray-400 pb-4">
              <div className="flex-1">
                <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                  एसियाली वाइल्डकार्ड च्याम्पियनसिपमा नेपाली खेलाडीलाई दुई पदक
                </h3>
              </div>
              <img src={sports5} className="w-28 h-20 object-cover rounded" />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="font-semibold leading-snug hover:text-blue-500 cursor-pointer">
                  महिला टी–२० विश्वकप छनोटको समूह र खेलतालिका सार्वजनिक
                </h3>
              </div>
              <img src={sports6} className="w-28 h-20 object-cover rounded" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-6">
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

        {/* last part*/}
        <hr className="border-gray-300 my-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          <div className="flex gap-4 border-r border-r-gray-400">
            <img
              src={sports3}
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
              src={sports2}
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
              src={sports6}
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
    </>
  );
}

