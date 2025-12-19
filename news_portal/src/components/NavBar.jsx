import React from "react";
import TopHeader from "./TopHeader";
import BottomNav from "./BottomNav";

export default function NavBar(){
    return(
        <header className="w-full bg-white">
            <TopHeader/>
            <BottomNav/>
        </header>
    );
}