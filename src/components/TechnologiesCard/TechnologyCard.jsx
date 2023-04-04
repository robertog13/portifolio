import React from 'react';

function TecCard(prop) {
  const { iconsTec, technology, infoTec } = prop;

  return (
  <div className='TecCard'>
    {iconsTec}
    <h4>{technology}</h4>
  </div>
  );
}

export default TecCard;