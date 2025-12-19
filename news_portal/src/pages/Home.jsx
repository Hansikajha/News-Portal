import React, { useState } from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Home() {

    const sliderImages = [pic1, pic2, pic3, pic4, pic5];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === sliderImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? sliderImages.length - 1 : prev - 1
        );
    }

    return (
        <>
            <div className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT + CENTER MAIN NEWS (Span 2 columns) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Hero story */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <img
                            src={pic1}
                            alt="Main feature"
                            className="w-full lg:w-1/2 h-80 object-cover rounded"
                        />
                        <div className="flex-1 space-y-4">
                            <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Exclusive</p>
                            <h2 className="text-3xl font-bold leading-tight">
                                Microsoft Hires Sam Altman Hours After OpenAI Rejects His Return As C.E.O.
                            </h2>
                            <p className="text-base text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora ut reprehenderit
                                illo blanditiis eius consectetur quasi neque omnis odio?
                            </p>
                            <p className="text-sm text-gray-500">1 hour ago</p>
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 2nd part left */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8">
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
                                <h3 className="text-lg font-semibold leading-snug">
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
                                    Technology
                                </p>
                                <h3 className="text-lg font-semibold leading-snug">
                                    The latest on AI, startups, and the race for innovation.
                                </h3>
                                <p className="text-xs text-gray-500">45 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 3rd part left */}
                    <div className="space-y-6 pt-7">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex-1 space-y-2">
                                <h4 className="text-2xl font-semibold leading-snug">
                                    Microsoft Hires Sam Altman Hours After OpenAI Rejects His Return As C.E.O.
                                </h4>
                                <p className="text-base text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora ut reprehenderit
                                    illo blanditiis eius consectetur quasi neque omnis odio?
                                </p>
                                <p className="text-sm text-gray-500">1 hour ago</p>
                            </div>
                            <img
                                src={pic1}
                                alt="News"
                                className="md:w-64 h-64 object-cover rounded"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex-1 space-y-2">
                                <h4 className="text-2xl font-semibold leading-snug">
                                    The stakes of AI leadership after a dramatic weekend.
                                </h4>
                                <p className="text-base text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit doloremque,
                                    tenetur officiis omnis expedita.
                                </p>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                            <img
                                src={pic3}
                                alt="News"
                                className="md:w-64 h-64 object-cover rounded"
                            />
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 4th part left */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-7">
                        <div className="space-y-2">
                            <img
                                src={pic3}
                                alt="Documentary"
                                className="w-full h-72 object-cover rounded"
                            />
                            <p className="text-sm font-semibold leading-snug">
                                Do you need to tip self-service kiosks? Here's how to deal with rising tip requests.
                            </p>
                            <p className="text-xs text-gray-500">1 hour ago</p>
                        </div>

                        <div className="space-y-2">
                            <img
                                src={pic4}
                                alt="Documentary"
                                className="w-full h-72 object-cover rounded"
                            />
                            <p className="text-sm font-semibold leading-snug">
                                How streaming changed documentaries for pop stars everywhere.
                            </p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>

                        <div className="space-y-2">
                            <img
                                src={pic4}
                                alt="Documentary"
                                className="w-full h-72 object-cover rounded"
                            />
                            <p className="text-sm font-semibold leading-snug">
                                Inside the growing wave of creator-owned media experiments.
                            </p>
                            <p className="text-xs text-gray-500">3 hours ago</p>
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 5th part left */}
                    <div className="space-y-1 pt-7">

                        {/* Slider */}
                        <div className="relative w-full h-[320px] overflow-hidden rounded">

                            {/*  Image */}
                            <img
                                src={sliderImages[currentSlide]}
                                alt="Feature"
                                className="w-full h-full object-cover transition-all duration-500"
                            />

                            {/* Left Button */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-3 top-1/2 -translate-y-1/2  border border-gray-300 p-2 rounded-full hover:bg-white cursor-pointer"
                            >
                                <FaChevronLeft size={15} className="text-gray-600 hover:text-black" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-3 top-1/2 -translate-y-1/2  border border-gray-300 p-2 rounded-full hover:bg-white cursor-pointer"
                            >
                                <FaChevronRight size={15} className="text-gray-600 hover:text-black" />
                            </button>


                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-1.5 h-1.5 rounded-full transition
                                             ${currentSlide === index ? "bg-black" : "bg-gray-300"}`}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Caption */}
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold leading-snug">
                            Israel Releases Video It Says Shows Hamas Tunnel Under Hospital
                        </p>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora ut reprehenderit
                            illo blanditiis eius consectetur quasi neque omnis odio?
                        </p>
                        <p className="text-xs text-gray-500">See more updates</p>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6 mt-2">

                    {/* 1st Sidebar Feature Story */}
                    <div className="space-y-2">
                        <img
                            src={pic2}
                            alt="Documentary"
                            className="w-full h-44 object-cover rounded"
                        />
                        <h3 className="text-lg font-semibold">
                            Every Star Wants A Documentary Now. But Is It Just P.R.?
                        </h3>
                        <p className="text-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* 2nd Small List Items */}
                    <hr className="border-gray-300 my-0" />
                    <div className="pt-6">
                        <div className="grid grid-cols-2 gap-4">

                            <div className="space-y-2">
                                <img
                                    src={pic3}
                                    alt="Documentary"
                                    className="w-full h-32 object-cover rounded"
                                />
                                <p className="text-sm font-semibold leading-snug">
                                    Do you need to tip self-service kiosks?
                                </p>
                                <p className="text-xs text-gray-500">1 hour ago</p>
                            </div>

                            <div className="space-y-2">
                                <img
                                    src={pic4}
                                    alt="Documentary"
                                    className="w-full h-32 object-cover rounded"
                                />
                                <p className="text-sm font-semibold leading-snug">
                                    Do you need to tip self-service kiosks?
                                </p>
                                <p className="text-xs text-gray-500">1 hour ago</p>
                            </div>

                        </div>
                    </div>

                    {/* 3rd Sidebar Feature Story */}
                    <hr className="border-gray-300 my-0" />
                    <div className="space-y-2 pt-6">
                        <img
                            src={pic2}
                            alt="Documentary"
                            className="w-full h-44 object-cover rounded"
                        />
                        <h3 className="text-lg font-semibold">
                            Every Star Wants A Documentary Now. But Is It Just P.R.?
                        </h3>
                        <p className="text-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* 4th Sidebar Feature Story */}
                    <hr className="border-gray-300 my-0" />
                    <div className="space-y-1 pt-4">
                        <p className="font-bold text-sm tracking-wide">Opinion</p>
                        <p className="text-gray-400 text-sm">Gail Collins</p>
                        <h3 className="text-lg font-bold leading-snug">
                            Every Star Wants A Documentary Now. But Is It Just P.R.?
                        </h3>
                        <p className="text-sm text-gray-600">1 hour ago</p>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 5th sidebar left */}
                    <div className="pb-2 pt-4 w-full">
                        <div className="flex items-start gap-4 w-full">

                            <div className="space-y-2">
                                <h3 className="text-lg font-bold leading-snug">
                                    Every Star Wants A Documentary Now. But Is It Just P.R.?
                                </h3>
                                <p className="text-sm text-gray-600">1 hour ago</p>
                            </div>

                            <img
                                src={pic1}
                                alt="News"
                                className="h-28 w-28 object-cover rounded"
                            />
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 6th Sidebar Feature Story */}
                    <div className="space-y-1 pb-2 pt-4">
                        <p className="font-bold text-sm tracking-wide">Opinion</p>
                        <p className="text-gray-400 text-sm">Gail Collins</p>
                        <h3 className="text-lg font-bold leading-snug">
                            Every Star Wants A Documentary Now. But Is It Just P.R.?
                        </h3>
                        <p className="text-sm text-gray-600">1 hour ago</p>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 7th sidebar left */}
                    <div className="pb-2 pt-4 w-full">
                        <div className="flex items-start gap-4 w-full">

                            <div className="space-y-2">
                                <h3 className="text-lg font-bold leading-snug">
                                    Every Star Wants A Documentary Now. But Is It Just P.R.?
                                </h3>
                                <p className="text-sm text-gray-600">1 hour ago</p>
                            </div>

                            <img
                                src={pic1}
                                alt="News"
                                className="h-15 w-15 object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 8th sidebar left */}
                    <div className="pb-2 pt-4 w-full">
                        <div className="flex items-start gap-4 w-full">

                            <div className="space-y-2">
                                <h3 className="text-lg font-bold leading-snug">
                                    Every Star Wants A Documentary Now. But Is It Just P.R.?
                                </h3>
                                <p className="text-sm text-gray-600">1 hour ago</p>
                            </div>

                            <img
                                src={pic1}
                                alt="News"
                                className="h-15 w-15 object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 9th Sidebar Feature Story */}
                    <div className="space-y-1 pb-2 pt-4">
                        <p className="font-bold text-sm tracking-wide">Opinion</p>
                        <p className="text-gray-400 text-sm">Gail Collins</p>
                        <h3 className="text-lg font-bold leading-snug">
                            Every Star Wants A Documentary Now. But Is It Just P.R.?
                        </h3>
                        <p className="text-sm text-gray-600">1 hour ago</p>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 10th sidebar left */}
                    <div className="pt-4 w-full">
                        <div className="flex items-start gap-4 w-full">

                            <div className="space-y-2 space-x-20">
                                <h3 className="text-lg font-bold leading-snug">
                                    Notes on going home!
                                </h3>
                                <p className="text-sm text-gray-600">1 hour ago</p>
                            </div>

                            <img
                                src={pic6}
                                alt="News"
                                className="h-28 w-28 object-cover rounded"
                            />
                        </div>
                    </div>
                    <hr className="border-gray-300 my-0" />

                    {/* 11th sidebar left */}
                    <div className="pt-4 w-full">
                        <div className="flex items-start gap-4 w-full">

                            <div className="space-y-2 space-x-20">
                                <h3 className="text-lg font-bold leading-snug">
                                    Notes on going home!
                                </h3>
                                <p className="text-sm text-gray-600">1 hour ago</p>
                            </div>

                            <img
                                src={pic6}
                                alt="News"
                                className="h-28 w-28 object-cover rounded"
                            />
                        </div>
                    </div>

                </div>

            </div>

            {/* Wellness Section */}
            <div className="pt-10 mt-10 border-t border-gray-800 ">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section title */}
                    <h2 className="text-sm font-bold tracking-wide uppercase mb-6">
                        Wellness
                    </h2>

                    {/* Wellness cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <img src={pic1} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Holly Stapleton</p>
                            <p className="text-sm font-semibold leading-snug">
                                8 Sex Myths That Experts Wish Would Go Away
                            </p>
                        </div>

                        <div className="space-y-2">
                            <img src={pic2} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Shannon Erickson</p>
                            <p className="text-sm font-semibold leading-snug">
                                Can you get a full body workout in 20 minutes?
                            </p>
                        </div>

                        <div className="space-y-2">
                            <img src={pic3} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Matt Darty</p>
                            <p className="text-sm font-semibold leading-snug">
                                How to Feel Alive Again
                            </p>
                        </div>

                        <div className="space-y-2">
                            <img src={pic4} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Chris Klein</p>
                            <p className="text-sm font-semibold leading-snug">
                                How to Know If You Have Genetic Risk for Alzheimer’s
                            </p>
                        </div>
                    </div>
                </div>

                {/* Advertisement banner */}
                <div className="max-w-full h-[64px] mt-5 pt-6">
                    <img
                        src={pic7}
                        alt="Advertisement"
                        className="mx-auto max-w-full h-auto"
                    />
                </div>
            </div>

            {/* Wellness Section */}
            <div className="pt-8 my-8">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section title */}
                    <h2 className="text-sm font-bold tracking-wide uppercase mb-6">
                        Wellness
                    </h2>

                    {/* Wellness cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <img src={pic1} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Holly Stapleton</p>
                            <p className="text-sm font-semibold leading-snug">
                                8 Sex Myths That Experts Wish Would Go Away
                            </p>
                        </div>

                        <div className="space-y-2">
                            <img src={pic2} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Shannon Erickson</p>
                            <p className="text-sm font-semibold leading-snug">
                                Can you get a full body workout in 20 minutes?
                            </p>
                        </div>

                        <div className="space-y-2">
                            <img src={pic3} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Matt Darty</p>
                            <p className="text-sm font-semibold leading-snug">
                                How to Feel Alive Again
                            </p>
                        </div>

                        <div className="space-y-2">
                            <img src={pic4} className="w-full h-40 object-cover" />
                            <p className="text-xs text-gray-400">Chris Klein</p>
                            <p className="text-sm font-semibold leading-snug">
                                How to Know If You Have Genetic Risk for Alzheimer's
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100 py-14">
                <div className="max-w-4xl mx-auto bg-neutral-900 text-white py-10 px-6 text-center">
                    
                    {/* Brand */}
                    <p className="text-lg tracking-widest mb-4 font-serif">
                        THE NEW YORK TIMES
                    </p>

                    {/* Headline */}
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#F6F3C2]">
                        All of the Times. All in One Subscription.
                    </h2>

                    {/* Price */}
                    <p className="text-sm text-[#FEE07E] mb-6">
                      100Rs a week for your first six months  
                    </p>

                    <button className="bg-white text-black text-xs font-semibold px-6 py-2 uppercase hover:bg-gray-200 transition cursor-pointer">
                        Subscribe
                    </button>

                    <p className="text-xs text-gray-400 mt-3">
                        Cancle or change anytime.
                    </p>
                </div>
            </div>
        </>
    );
}
