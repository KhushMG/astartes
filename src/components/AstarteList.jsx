import React from 'react'
import AstarteCard from './AstarteCard'

const AstarteList = ({ astartesList }) => {
  return (
    <div className='flex-1'>
      <div className='flex flex-wrap gap-x-[2rem] gap-y-[2rem]'>
        {astartesList && astartesList.map((astarte, index) => (
        <AstarteCard key={index} astarte={astarte}/>
        ))}
      </div>
    </div>
  );
}

export default AstarteList;