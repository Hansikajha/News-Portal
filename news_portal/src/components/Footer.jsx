import React from "react";
import { Link } from "react-router-dom";

const footerLinks = {
    NEWS: [
        "Home",
        "Latest News",
        "Trending",
        "Politics",
        "Sports",
        "Entertainment",
        "Business",
        "Technology",
        "Health",
    ],

    OPINION: [
        "Today's Opinion",
        "Columnists",
        "Editorials",
        "Cartoons",
        "Letters",
    ],

    ARTS: [
        "Today's Arts",
        "Art & Design",
        "Books",
        "Movies",
        "Music",
        "TV",
        "Theater",
    ],

    LIVING: [
        "Today's Living",
        "Style",
        "Food",
        "Travel",
        "Real Estate",
    ],

    MORE: [
        "Cooking",
        "Podcasts",
        "Live Events",
        "Videos",
        "Photography",
    ],
}

export default function Footer() {
    return (
        <>
            <footer className="py-10 border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-5  ml-18 ">

                    {/* Logo */}
                    <h2 className="font-serif text-xl mb-10">
                        The News Times 
                    </h2>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <div key={section}>
                                <h3 className="text-lg font-bold uppercase mb-4 tracking-wide">
                                    {section}
                                </h3>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li 
                                            key={link}
                                            className="text-sm text-gray-700 hover:text-black cursor-pointer"
                                        >
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-200 mt-16 pt-16 text-xs text-gray-500 flex flex-wrap gap-4 justify-center text-center">
                      <span>© 2025 The News Portal</span>
                      <span>Contact Us</span>
                      <span>Privacy Policy</span>
                      <span>Help</span>
                    </div>
                </div>
            </footer>
        </>
    )

}