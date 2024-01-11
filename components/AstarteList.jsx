import React from 'react'
import AstarteCard from './AstarteCard'

const AstarteList = ({ astartesList }) => {
  return (
    <div>
      {astartesList && astartesList.map((astarte, index) => (
        <AstarteCard key={index} astarte={astarte}/>
      ))}
    </div>
  );
}

export default AstarteList;