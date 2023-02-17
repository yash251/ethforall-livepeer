import React from "react";

export default function Asset({
    asset
}) {
    console.log(asset);
    return (
        <div className="bg-white shadow-md rounded-lg w-[40%] mt-8">
            <div className="flex flex-row items-center">
                
                <div className="flex justify-center items-center w-24 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-l-lg">
                    <p className="text-xl font-semibold text-white">
                        .{asset.name.split('.').pop()}
                    </p>
                </div>

                <div className="flex flex-col justify-center items-start ml-8">
                    <p className="text-lg font-semibold text-gray-800">
                        {asset.name}
                    </p>
                </div>

            </div>
        </div>
    );
}
