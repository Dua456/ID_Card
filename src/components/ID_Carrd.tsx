import React from "react";
import Image from "next/image";

export default function IDCard() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex grow items-center justify-center p-6">
                <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-2xl w-full flex items-center justify-center border-4 border-sky-300">

                    {/* Background images */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="relative h-full w-full max-w-[450px] max-h-[350px]">
                            <Image 
                            src="/background image.jpeg"
                             alt="background image" 
                             width={400} 
                             height={800}
                            className="opacity-10 object-cover" />
                        </div>
                    </div>

                    {/* Left section */}
                    <div className="w-2/3 pr-4 pt-16 relative z-10">

                        {/* Logo */}
                        <img src="https://upload.wikimedia.org/wikipedia/ur/1/1e/Governor_of_Sindh_Logo.png" alt="Card logo" className="absolute top-[-20px] left-0 w-16 z-10"  />

                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Name: </strong></span>
                            <span className="text-black font-bold">Dua Shakir</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Roll No: </strong></span>
                            <span className="text-black font-bold">00346451</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Distance Learning: </strong></span>
                            <span className="text-black font-bold">No</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>City: </strong></span>
                            <span className="text-black font-bold">Karachi</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Center: </strong></span>
                            <span className="text-black font-bold">Governor House Karachi</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Campus: </strong></span>
                            <span className="text-black font-bold">Main</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Day&Time: </strong></span>
                            <span className="text-black font-bold">Wednesday 7:00pm - 10:00pm</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-sky-500">{""}<strong>Batch: </strong></span>
                            <span className="text-black font-bold">2</span>
                        </p>

                        {/* Button Section */}
                        <div className="flex flex-col mt-4">
                            <button className="relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                                <span className=" absolute inset-0 bg-slate-500" style={{width: "50%" }}></span>
                                <span className="relative z-10">Q2 & WMD</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/3 text-center relative z-10">
                        <Image src="/profile image.jpeg" alt="profile image" width={800} height={800} className=" border rounded-lg mb-6 w-full h-auto " />
                        <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">Authorized Signature</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
