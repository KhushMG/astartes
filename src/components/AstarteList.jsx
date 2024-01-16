import React from 'react'
import AstarteCard from './AstarteCard'

// Rendering all astartes. 
const AstarteList = ({ astartesList }) => {
  return (
    <div className="flex-1 my-[5rem]">
      <div className="flex justify-center mx-auto max-w-[70vw] flex-wrap gap-8">
        {astartesList &&
          astartesList.map((astarte, index) => (
            <AstarteCard key={index} astarte={astarte} />
          ))}
      </div>
    </div>
  );
};


export default AstarteList;