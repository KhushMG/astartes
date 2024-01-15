import React from 'react'
import Image from 'next/image'

const AstarteCard = ({ astarte }) => {
  return (
    <div className="border-[2px] border-white p-8 rounded-md bg-white/30">
      <div className="border-2 border-white p-12 rounded-md flex justify-center">
        <Image src="/img" alt="image" width={50} height={60} />
      </div>
      <div className="flex justify-center mt-4 w-full">
        <div className="justify-center font-semibold text-xl">
          {astarte.name}
        </div>
      </div>
      <div className="flex font-medium justify-center mt-2 w-full">
        {astarte.chapter}
      </div>
      <div className="flex justify-center mt-2 w-full">{astarte.rank}</div>
      <div
        className={
          astarte.allegiance === "Traitor"
            ? "text-red-500 font-semibold flex items-center justify-center mt-2 w-full"
            : "text-blue-500 font-semibold flex items-center justify-center mt-2 w-full"
        }
      >
        {astarte.allegiance}
      </div>
    </div>
  );
};



export default AstarteCard;