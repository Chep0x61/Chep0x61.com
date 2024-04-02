"use client"

import { useState , useEffect } from 'react';
import './preloader.css'

const Preloader = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 1700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed z-20 top-0 left-0 w-full h-full flex flex-col overflow-hidden ${showPreloader ? 'visible' : 'hidden'}`}>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out"></div>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out-second"></div>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out-third"></div>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out-fourth"></div>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out-fifth"></div>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out-six"></div>
            <div className="flex w-full h-[15%] bg-[#1a1a1a] dark:bg-[#f8f8f8] animate-slide-out-last"></div>
        </div>
    );
};

export default Preloader;
