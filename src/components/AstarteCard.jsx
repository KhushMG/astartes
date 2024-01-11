import React from 'react'
import Image from 'next/image'

const AstarteCard = ({ astarte }) => {
  return (
    <div className="border border-white p-8 rounded-md bg-gray-700">
      <div className="border border-white p-12 rounded-md" >
        <Image src="/placeholder" alt="placeholder" width={50} height={60} />
      </div>
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-semibold text-2xl">{astarte.name}</h1>
      </div>
      <div className="flex items-center justify-center mt-2">
        {astarte.chapter}
      </div>
      <div className="flex items-center justify-center mt-2">
        {astarte.rank}
      </div>
    </div>
  );
}

export default AstarteCard;