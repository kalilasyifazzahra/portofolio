"use client";
export default function blue () {
    return (
        <>
        <div className="grid grid-col">

            <div className="ml-3 mt-2 max-w-sm w-80 bg-white rounded-lg shadow flex items-center p-4">
                <div className="w-16 h-16 bg-cyan-500 rounded flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-white rounded"></div>
                </div>
                <div className="ml-4">
                    <div className="text-xs text-gray-500 font-semibold">MESSAGES</div>
                    <div className="text-xl font-bold text-gray-700">1,410</div>
                </div>
            </div>

            <div className="ml-3 max-w-sm w-80 bg-cyan-500 rounded-lg shadow p-4 mb-4 text-white mt-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase opacity-80">Bookmarks</p>
                        <p className="text-xl font-bold">41,410</p>
                    </div>
                    <div className="w-10 h-10 border border-white rounded"></div>
                </div>
                <div className="mt-3">
                    <div className="h-1 bg-cyan-300 rounded-full">
                        <div className="h-1 bg-white w-[70%] rounded-full"></div>
                    </div>
                    <p className="text-xs mt-1">70% Increase in 30 Days</p>
                </div>
            </div>

            <div className="ml-3 max-w-sm w-80 bg-sky-500 rounded-lg shadow p-4 mb-4 text-white mt-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-3xl font-bold">150</p>
                        <p className="text-sm opacity-80">New Orders</p>
                    </div>
                    <div className="w-10 h-10 border border-white rounded"></div>
                </div>
                <button className="text-xs mt-3 underline">More info</button>
            </div>

            <div className="ml-3 max-w-sm w-80 bg-white rounded-lg shadow p-4 mt-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">Expandable</p>
                </div>
            </div>

            <div className="ml-3 max-w-sm w-80 bg-gray-200 rounded-lg shadow p-4 mt-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">Expandable</p>
                </div>
            </div>

            <div className="ml-3 max-w-sm w-80 bg-white rounded-lg shadow overflow-hidden mt-4">
                <div className="flex items-center justify-between p-3 border-b">
                    <h2 className="text-sm font-semibold text-gray-700">Direct Chat</h2>
                    <span className="bg-sky-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                        3
                    </span>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex items-start space-x-2">
                        <img
                            src="./Asset/profile.png"
                            alt="hi"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <div className="flex items-center space-x-2">
                                <p className="text-sm font-semibold text-gray-700">
                                    Kalyla
                                </p>
                                <span className="text-xs text-gray-400">23 Jan 2:00 pm</span>
                            </div>
                            <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg mt-1 max-w-[180px]">
                               Halo, pak!
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 justify-end">
                        <div>
                            <div className="flex items-center justify-end space-x-2">
                                <span className="text-xs text-gray-400">23 Jan 2:05 pm</span>
                                <p className="text-sm font-semibold text-gray-700">
                                    Pak Oktavyanto
                                </p>
                            </div>
                            <div className="bg-sky-500 text-white px-3 py-2 rounded-lg mt-1 max-w-[180px] text-right">
                                Wow, Keren!
                            </div>
                        </div>
                        <img
                            src="./Asset/pakokta.png"
                            alt="u"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}