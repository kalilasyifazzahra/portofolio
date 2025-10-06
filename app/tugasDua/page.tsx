import React from "react";

export default function Tugas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Formulir Pendaftaran Siswa
        </h1>

        <form className="space-y-10">

          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Data Diri
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-medium">NIS</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">NISN</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Email Sekolah</label>
                <input type="email" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Nama Lengkap</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Jenis Kelamin</label>
                <select className="border rounded-md p-2">
                  <option value="perempuan">Perempuan</option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="lain">Tidak Ingin Memberi Tau</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Tempat Lahir</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Tanggal Lahir</label>
                <input type="date" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Agama</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="font-medium">Alamat</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Provinsi</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Kota/Kabupaten</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Kecamatan</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Nomor Whatsapp</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
            </div>
          </section>

          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Asal Sekolah
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-medium">Nama Asal Sekolah</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Provinsi</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Kota/Kabupaten</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Kecamatan</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="font-medium">Alamat Sekolah</label>
                <input type="text" required className="border rounded-md p-2" />
              </div>
            </div>
          </section>

        
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Data Orang Tua / Wali
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-md p-4">
                <h3 className="text-lg font-bold mb-4">Data Ayah/Wali</h3>
                <div className="flex flex-col gap-2">
                  <label>Nama</label>
                  <input type="text" className="border rounded-md p-2" />
                  <label>Profesi</label>
                  <input type="text" className="border rounded-md p-2" />
                  <label>No Whatsapp</label>
                  <input type="text" className="border rounded-md p-2" />
                  <label>Usia</label>
                  <input type="number" className="border rounded-md p-2" />
                  <label>Alamat</label>
                  <input type="text" className="border rounded-md p-2" />
                </div>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="text-lg font-bold mb-4">Data Ibu/Wali</h3>
                <div className="flex flex-col gap-2">
                  <label>Nama</label>
                  <input type="text" className="border rounded-md p-2" />
                  <label>Profesi</label>
                  <input type="text" className="border rounded-md p-2" />
                  <label>No Whatsapp</label>
                  <input type="text" className="border rounded-md p-2" />
                  <label>Usia</label>
                  <input type="number" className="border rounded-md p-2" />
                  <label>Alamat</label>
                  <input type="text" className="border rounded-md p-2" />
                </div>
              </div>
            </div>

               <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 mt-4 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition"
            >
              submit
            </button>
          </div>
          </section>

      
            
        </form>
      </div>
    </main>
  );
}
