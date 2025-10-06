'use client';
import { useEffect } from "react";

export default function Page () {
    useEffect(() => {alert ("ini page buku")})
    console.log("ini buku");
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" >
            <h1 className="text-2xl text-bold text-center">ini buku yeah</h1>
           <img src="/Asset/reading.png" alt="img" width={300} height={300} />
        </div>
    )
}