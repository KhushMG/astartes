import React from 'react'

const AstarteCard = ({ astarte }) => {
  return (
    <div className="border border-black rounded-sm">
      <div className="border border-stone-600 p-2">
        Image supposed to go here
      </div>
      <div>
        {astarte.name}
        {astarte.chapter}
        {astarte.rank}
      </div>
    </div>
  );
}

export default AstarteCard;