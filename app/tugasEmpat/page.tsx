"use client";
import React, { useState } from "react";
import Red from "@/app/tugasTigaempat/page";
import Link from 'next/link';

export default function Layout () {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
      const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" },
      ];
    return (
        <>
        

            <div className="bg-gray-800 min-h-screen w-full h-full">
         
            <div className="text-white text-3xl ml-15 pt-8 font-bold">Dasbor Monitoring Jaringan</div>
                <p className="text-gray-300 ml-15">Status koneksi internet dan perangkat lokal secara real-time</p>

                    <div className="flex items-center justify-center flex-row pl-1.5">
                        <div className="bg-gray-700 w-11/12 rounded-lg shadow p-2 mt-7 flex items-center gap-3">
                            <p className="text-white">Rentang IP Lokal(CDR):</p>
                            <p className="bg-gray-600 w-45 rounded-sm h-8 text-white pt-1 pl-8">192.168.0.0/21</p> 
                            <p className="bg-blue-500 text-white w-40 rounded-xl p-2 pl-4 font-bold">Mulai Scan Lokal</p>
                            <p className="bg-gray-600 text-gray-300 w-50 ml-96 pl-2 h-8 pt-1 rounded">Search</p>
                        </div>
                    </div>

            <div className="flex gap-3 mt-3">
                    <div className="bg-teal-900 flex items-center p-4 mt-7 max-w-sm w-70 ml-15 rounded-lg h-30">
                        <div className="bg-gray-600 rounded-full w-11 h-11"></div>
                        <div className="ml-3">
                            <p className="text-gray-400 text-xs">Status Internet</p>
                            <p className="text-green-400 font-bold text-2xl">Online</p>
                        </div>
                     </div>

                    <div>
                        <div className="bg-gray-700 flex items-center p-4 max-w-sm w-70 rounded-lg h-30 mt-7">
                            <div className="bg-gray-600 rounded-full w-11 h-11"></div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-xs">Latensi Internet</p>
                                <p className="text-white font-bold text-2xl">14 <span className="font-normal">ms</span></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-700 flex items-center p-4 max-w-sm w-70 rounded-lg h-30 mt-7">
                            <div className="bg-gray-600 rounded-full w-11 h-11"></div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-xs">Packet Loss</p>
                                <p className="text-white font-bold text-2xl">0,28 <span className="font-normal">%</span></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-700 flex items-center p-4 max-w-sm w-70 rounded-lg h-30 mt-7">
                            <div className="bg-gray-600 rounded-full w-11 h-11"></div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-xs">Perangkat Lokal Aktif</p>
                                <p className="text-white font-bold text-2xl">1839 <span className="font-normal">/</span> 2045</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex gap-3 pl-[60px] flex-row pb-4">
                    <div className="bg-gray-700 w-[700px] rounded-lg shadow mt-7 h-80 flex items-center gap-3"></div>
                    <div className="bg-gray-700 w-[448px] mt-7 rounded-lg shadow h-80"></div>
            </div>

            
        </div>
        </>
    );
};