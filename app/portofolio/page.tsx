import React from "react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-pink-300 text-white flex flex-col overflow-y-auto scroll-smooth">
      <nav className="bg-pink-400 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Portfolio</h1>
          <ul className="flex space-x-6 text-white font-medium">
            <li><a href="#home" className="hover:text-pink-200">Home</a></li>
            <li><a href="#about" className="hover:text-pink-200">About</a></li>
            <li><a href="#skills" className="hover:text-pink-200">Skills</a></li>
            <li><a href="#portfolio" className="hover:text-pink-200">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-pink-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* home secetion */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">hi, it's me!</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-400 mt-2">
              Kalyla Nursyifa Azzahra
            </h1>
            <h2 className="text-3xl font-bold mt-4">Siswi SMK Telkom Makassar</h2>
            <h3 className="text-2xl font-medium">RPL (Rekayasa Perangkat Lunak)</h3>

            <div className="flex space-x-4 mt-6"> {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-pink-400 bg-pink-400 flex items-center justify-center transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(244,114,182,0.8)]"/> ))}
            </div>


            <button className="mt-6 px-6 py-3 bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-300 hover:text-white transition">
              Tentang Saya
            </button>
          </div>

          <div className="flex justify-center relative">
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-pink-400 drop-shadow-[0_0_35px_rgba(244,114,182,0.9)]">
              <img src="hammy.png" alt="Profile Lyla" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="w-[400px] h-[400px] md:w-[600px] drop-shadow-[0_0_35px_rgba(244,114,182,0.9)]">
              <img src="hamm.png" alt="Profile Lyla" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-bold text-pink-400 mb-6">About Me</h2>
            <p className="text-base font-medium">
              Hi, semua! nama saya Andi Kalyla Nursyifa Azzahra. <br />
              Saya Lahir Pada tanggal 29 Juni 2009, dan Saat Ini Saya Berumur 16 Tahun 
              Saya Anak Terakhir dari 3 Bersaudara. Saat ini saya tinggal di Kota Makassar.
            
            </p>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section id="skills" className="px-6 py-32">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-400">My Skills</h2>
          <p className="text-base font-medium mt-4">
            Berikut beberapa layanan dan keahlian saya dalam bidang teknologi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["UI/UX Design", "Frontend Developer", "3D"].map((skill) => (
            <div
              key={skill}
              className="bg-transparent p-8 rounded-2xl shadow-lg border-4 border-pink-400 text-pink-400 drop-shadow-[0_0_25px_rgba(244,114,182,0.8)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(244,114,182,1)]"
            >
              <h3 className="text-2xl font-bold mb-4">{skill}</h3>
              <p className="text-white mb-6">
                ahleleahlelas
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* portfolio section */}
      <section id="portfolio" className="px-6 py-32">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-400">Keahlian Saya</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="p-10 rounded-2xl bg-transparent border-4 border-pink-400 text-pink-400 drop-shadow-[0_0_25px_rgba(244,114,182,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(244,114,182,1)] transition">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="flex justify-center">
              <img src="hamst.png" alt="Technical Skills" className="max-w-xs h-auto object-contain" />
            </div>
          </div>

          <div className="p-10 rounded-2xl bg-transparent border-4 border-pink-400 text-pink-400 drop-shadow-[0_0_25px_rgba(244,114,182,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(244,114,182,1)] transition">
            <h3 className="text-2xl font-bold mb-4">Profesional Skills</h3>
            <div className="flex justify-center">
              <img 
                src="hmst.png" 
                alt="Profesional Skills" 
                className="max-w-xs h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <div className="w-[400px] h-[400px] md:w-[500px] drop-shadow-[0_0_35px_rgba(244,114,182,0.9)]">
              <img 
                src="hamms.png" 
                alt="g" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-left mb-6">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
              <p className="text-base font-medium leading-relaxed text-white">
                Dengan latar belakang pendidikan di bidang 
                <span className="text-pink-400 font-semibold"> Rekayasa Perangkat Lunak (RPL)</span>, 
                saya memiliki keahlian dalam <span className="text-pink-400">UI/UX Design</span>, 
                <span className="text-pink-400"> Frontend Development</span>, serta 
                <span className="text-pink-400"> 3D Blender.</span> 
              </p>
            </div>

            <input 
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full max-w-sm mb-4 p-3 rounded-lg bg-pink-400 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              placeholder="Tulis pesan Anda..."
              className="w-full max-w-sm mb-4 p-3 rounded-lg bg-pink-400 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="w-full max-w-sm py-3 bg-pink-400 text-white font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              submit
            </button>
          </div>
        </div>
        
            {/* Icons bawah */}
        <div className="flex space-x-4 mt-6"> {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-10 h-10 rounded-full border-2 border-pink-400 bg-pink-400 flex items-center justify-center transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(244,114,182,0.8)]"/> ))}
        </div>
      </section>
    </div>
  );
}
