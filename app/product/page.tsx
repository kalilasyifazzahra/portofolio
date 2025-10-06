
'use client';

import { useEffect } from "react";

export default function Page() {
    useEffect(() => { alert("ini page tumblr") })
    console.log("ini page tumblr");
      
    return (
      
        <div className="flex min-h-screen bg-gray-100">

        
            <aside className="w-64 bg-pink-500 shadow-lg p-6">
                <nav className="space-y-4">
                    <a href="#" className="block text-white hover:underline font-bold text-lg">
                        Tumblr
                    </a>
                    <a href="#" className="block text-white hover:underline font-bold text-lg">
                        Buku
                    </a>
                </nav>
            </aside>

        
            <main className="flex-1 p-10">
                <div className="grid grid-cols-3 gap-6">

            
                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                    <div className="bg-pink-200 p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">
                        <img src="/Asset/tumblr.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-2xl font-bold text-white text-center mt-4">Tumblr</div>
                    </div>

                </div>
            </main>
        </div>
    );
}