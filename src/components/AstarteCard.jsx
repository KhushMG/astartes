import React from 'react'
import Image from 'next/image'

// Card to render individual Astarte.
const AstarteCard = ({ astarte }) => {
  return (
    <div className="border-[2px] border-white p-8 w-[20rem] max-w-[20rem] rounded-md bg-white/30">
      <div className="border-2 border-white h-[15rem] p-16 rounded-md relative justify-center">
        {astarte.image && (
          <Image
            src={astarte.image}
            alt="image"
            className="object-fill w-full h-full rounded-sm "
            fill={true}
          />
        )}
      </div>

      <div className="flex justify-center mt-4 w-full">
        <div className="font-semibold text-center text-xl">{astarte.name}</div>
      </div>
      <div className="flex font-medium text-center justify-center mt-2 w-full">
        {astarte.chapter}
      </div>
      <div className="flex justify-center text-center mt-2 w-full">
        {astarte.rank}
      </div>
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