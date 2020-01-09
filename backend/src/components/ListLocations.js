import React from 'react';

function ListLocations({ locations }) {
  return (
    <div>
      <h1>Locations</h1>
      {locations.map(location => (
        <div key={location.id}>
          <strong>name: </strong>
          {location.name}
        </div>
      ))}
    </div>
  );
}

export default ListLocations;
