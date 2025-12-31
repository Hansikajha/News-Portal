import React from "react";
import latestnewsimg1 from "../assets/latestnewsimg1.jpg";
import election from "../assets/election.jpg";
import latestnewsimg2 from "../assets/latestnewsimg2.jpg";
import congress from "../assets/congress.jpg";
import adsbanner from "../assets/adsbanner.png";


export default function LatestNews() {

  const newsData = [
    {
      img: election,
      title: "सरकारका ५ जना उद्धारकर्ता र खेलाडीलाई सिधै ग्रुप मिसनमा अवसर",
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
    {
      img: latestnewsimg2,
      title: "एमाले मतगणना अपडेट : १० वटा मतपेटिकाको चिठ्ठा निकाल्न बाँकी, सबै परिणाम एकसाथ सुनाउने",
    },
    {
      img: congress,
      title: "यी हुन् इन्दुप्रभाबाट केन्द्रमा सिफारिस भएका कांग्रेसका उम्मेदवारहरू (सूची)",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-6">

        {/* Advertisement banner */}
        <div className="max-w-full h-[100px] my-3">
          <img
            src={adsbanner}
            alt="Advertisement"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        {/* Section Titel */}
        <h2 className="text-3xl font-bold mb-4 text-blue-500">
          ताजा समाचार
        </h2>

        {/* Content Part */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">

          {/* Left Img */}
          <div className="md:col-span-2">
            <img
              src={latestnewsimg1}
              alt="latest news"
              className="w-full h-full object-cover rounded-l-xs"
            />
          </div>

          {/* Right Content */}
          <div className="bg-gray-100 rounded-r-xs px-6 flex flex-col justify-center">
            <h3 className="text-3xl text-gray-800 font-bold mb-6 hover:text-blue-500 cursor-pointer">
              यस्तो छ आज सागसब्जी र फलफूलको थोक मूल्य
            </h3>
            <p className="text-md text-gray-800 leading-relaxed">
              ३ पुष, काठमाडौं। कालिमाटी फलफूल तथा तरकारी बजार
              विकास समितिले आजका लागि कृषिजन्य...
            </p>
          </div>

        </div>

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

        {/* Advertisement banner */}
        <div className="max-w-full h-[100px] my-3">
          <img
            src={adsbanner}
            alt="Advertisement"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </section>

    </>
  );
}

