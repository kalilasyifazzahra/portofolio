"use client"

import React, { useState } from "react";

export default function Page() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan perhitungan di sini
        alert("Form submitted!");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-start justify-center">

            <div className="bg-white w-full max-w-sm p-8 shadow rounded-2xl flex flex-col justify-center mt-13 border border-gray-100">
                <div className="font-bold">Aplikasi Penghitung Discount</div>
                <form onSubmit={handleSubmit}>
                    <div className="relative mt-5">
                        <input type="text" id="namaBarang" required className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="namaBarang" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">masukkan nama barang</label>
                    </div>

                    <div className="relative mt-5">
                        <input type="text" id="kategoriBarang" required className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="kategoriBarang" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">masukkan kategori barang</label>
                    </div>

                    <div className="relative mt-5">
                        <input type="text" id="harga" required className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="harga" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">masukkan harga</label>
                    </div>

                    <div className="relative mt-5">
                        <input type="text" id="diskon" required className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="diskon" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">masukkan diskon</label>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500  text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition">
                                hitung
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 mt-3 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-600 transition">
                                bersih
                            </button>
                    </div>
                </form>
            </div>

            <div className="bg-white w-full max-w-sm p-8 shadow rounded-2xl flex flex-col justify-center mt-13 ml-6 border border-gray-100 ">
                <div className="font-bold">Aplikasi Penghitung Discount</div>
                <div className="font-bold">Nama Barang:</div>
                <div className="font-bold">Kategori Barang:</div>
                <div className="font-bold">Aplikasi Penghitung Discount</div>
                <div className="font-bold">Nilai Discount:</div>
                <div className="font-bold">Total Harga:</div>
                <button
                                type="button"
                                className="bg-yellow-500 mt-3 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition">
                                bersih
                            </button>
            </div>
        </div>
    )
};