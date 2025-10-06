"use client";
import React, { useState } from "react";

const aplikasiData = [
  { title: "JURNAL MENGAJAR", icon: "📄" },
  { title: "NILAI", icon: "🎒" },
  { title: "AKADEMIK", icon: "📚" },
  { title: "PRESENSI", icon: "📝" },
  { title: "RAPOR", icon: "📑" },
];

const guruChatData = [
  {
    name: "DANIEL DUMA TANAN",
    message: "tabik, ada yang liat kunci motor ku?",
    time: "2 hari yang lalu",
    likes: 0,
  },
  {
    name: "ANANDA DZIKMAH AMALIA",
    message: "Keren sekali ini aplikasinya :)",
    time: "2 hari yang lalu",
    likes: 0,
  },
  {
    name: "RISDAYANTI",
    message: "malam mingguannya dengan DIGITS...SEMANGAT untuk kita semua bapak/ibu",
    time: "2 hari yang lalu",
    likes: 0,
  },
];

export default function Page() {
  const [jurnalClass, setJurnalClass] = useState("XI RPL 4");
  const [date, setDate] = useState("2025-09-29");
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="telkomschool.png"
            alt="Logo Telkom"
            className="w-8 h-8 object-contain"
          />
          <h1 className="font-bold text-lg text-gray-900">
            SMK TELKOM MAKASSAR
          </h1>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <span className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center uppercase">
            O
          </span>
          <span className="font-bold">KALYLA</span>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <div className="grid grid-cols-12 gap-6">

            {/* Jurnal Mengajar */}
            <div className="col-span-8 bg-white shadow rounded-2xl overflow-hidden">
              <div className="bg-blue-100 px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Jurnal Mengajar</h2>
                <div className="flex space-x-2">
                  <select
                    value={jurnalClass}
                    onChange={(e) => setJurnalClass(e.target.value)}
                    className="bg-white rounded px-2 py-1 text-sm text-gray-500"
                  >
                    <option>XI RPL 4</option>
                    <option>XI RPL 5</option>
                  </select>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white rounded px-2 py-1 text-sm text-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x border-t py-4 text-center text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    Status Kehadiran
                  </p>
                  <div className="flex justify-around text-blue-600 font-bold">
                    <div>
                      <p>0</p>
                      <p className="text-xs text-gray-500">Hadir</p>
                    </div>
                    <div>
                      <p>0</p>
                      <p className="text-xs text-gray-500">Tidak Hadir</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    Status Jurnal
                  </p>
                  <div className="flex justify-around text-blue-600 font-bold">
                    <div>
                      <p>0</p>
                      <p className="text-xs text-gray-500">Belum</p>
                    </div>
                    <div>
                      <p>0</p>
                      <p className="text-xs text-gray-500">Draft</p>
                    </div>
                    <div>
                      <p>0</p>
                      <p className="text-xs text-gray-500">Simpan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guru Terbaik */}
            <div className="col-span-4 bg-white shadow rounded-2xl p-4 flex flex-col justify-center items-center">
              <h2 className="font-semibold text-gray-700">Guru Terbaik</h2>
              <p className="text-xs text-gray-400 italic">
                Belum ada guru terbaik
              </p>
              <div className="mt-2 w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-xl">
                👩‍🏫
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Aplikasi */}
            <div className="col-span-8 bg-white shadow rounded-2xl p-6">
              <h2 className="font-semibold text-gray-700 text-sm mb-4">
                Aplikasi
              </h2>
              <div className="flex justify-center space-x-10 text-gray-700">
                {aplikasiData.map(({ title, icon }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center space-y-2 cursor-pointer hover:text-blue-600 transition"
                  >
                    <div className="bg-blue-900 text-white rounded-md w-14 h-14 flex items-center justify-center text-2xl">
                      {icon}
                    </div>
                    <p className="text-xs font-bold">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div className="col-span-4 bg-white shadow rounded-2xl overflow-hidden">
              <div className="bg-blue-100 px-4 py-3">
                <h2 className="font-semibold text-gray-700 text-sm">News</h2>
              </div>
              <div className="border-t">
                <img src="hamm.png" alt="Aplikasi Cuti 3.0" className="w-full" />
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    Aplikasi CUTI 3.0
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3">
                    Kami informasikan bahwa Aplikasi CUTI telah diperbarui ke
                    Versi 3.0. Pembaruan ini dilakukan untuk menyesuaikan sistem
                    dengan Kebijakan Cuti...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">6 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Jadwal */}
            <div className="col-span-6 bg-white shadow rounded-2xl p-4">
              <h2 className="font-semibold text-gray-700 text-sm mb-3">
                Jadwal Mengajar Hari Ini
              </h2>
              <div className="flex items-center space-x-3 text-gray-600">
                <span className="rounded-full bg-blue-200 w-8 h-8 flex items-center justify-center text-blue-700 font-bold">
                  O
                </span>
                <div className="flex-1">
                  <p className="font-semibold">
                    KONSENTRASI KEAHLIAN RPL - XI RPL 4
                  </p>
                  <p className="text-sm text-gray-500">14:00 - 14:45</p>
                </div>
                <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold">
                  Upcoming
                </span>
              </div>
            </div>

            {/* To Do List */}
            <div className="col-span-6 bg-white shadow rounded-2xl p-4">
              <h2 className="font-semibold text-gray-700 text-sm mb-3">
                To Do List
              </h2>
              <p className="text-gray-500 text-sm">To Do Items here...</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-white shadow rounded-2xl p-4 flex flex-col h-[calc(100vh-100px)]">
          <h2 className="font-semibold text-gray-700 mb-4">Sapa Guru</h2>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {guruChatData.map(({ name, message, time, likes }, idx) => (
              <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="bg-blue-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-xs uppercase font-semibold">
                    {name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-700 text-sm">
                    {name}
                  </span>
                </div>
                <p className="text-gray-600 text-xs mb-1">{message}</p>
                <div className="flex items-center text-xs text-gray-400 space-x-4">
                  <span>{likes} orang suka</span>
                  <span>{time}</span>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setChatInput("");
            }}
            className="mt-4"
          >
            <input
              type="text"
              placeholder="Ketik sesuatu ..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}