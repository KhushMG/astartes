import React from 'react'
import Image from 'next/image'

const AstarteCard = ({ astarte }) => {
  return (
    <div className="border-[2px] border-white p-8 rounded-md bg-white/30">
      <div className="border-2 border-white p-12 rounded-md">
        <Image src="/placeholder" alt="placeholder" width={50} height={60} />
      </div>
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-semibold text-2xl">{astarte.name}</h1>
      </div>
      <div className="flex font-medium items-center justify-center mt-2">
        {astarte.chapter}
      </div>
      <div className="flex items-center justify-center mt-2">
        {astarte.rank}
      </div>
      <div
        className={
          astarte.allegiance === "Traitor"
            ? "text-red-500 font-semibold flex items-center justify-center mt-2"
            : "text-blue-500 font-semibold flex items-center justify-center mt-2"
        }
      >
        {astarte.allegiance}
      </div>
    </div>
  );
}

export default AstarteCard;