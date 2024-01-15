import React from 'react'
import AstarteCard from './AstarteCard'

const AstarteList = ({ astartesList }) => {
  return (
    <div className='flex-1 mb-[2rem] mt-[2rem]'>
      <div className='flex justify-center max-w-[60vw] ml-[2rem] sm:ml-[15rem] flex-wrap gap-x-[2rem] gap-y-[2rem]'>
        {astartesList && astartesList.map((astarte, index) => (
        <AstarteCard key={index} astarte={astarte}/>
        ))}
      </div>
    </div>
  );
}

export default AstarteList;