import React from 'react'
import AstarteCard from './AstarteCard'

const AstarteList = ({ astartesList }) => {
  return (
    <div className="flex-1 my-8">
      <div className="flex justify-center mx-auto max-w-[60vw] flex-wrap gap-8">
        {astartesList &&
          astartesList.map((astarte, index) => (
            <AstarteCard key={index} astarte={astarte} />
          ))}
      </div>
    </div>
  );
};


export default AstarteList;