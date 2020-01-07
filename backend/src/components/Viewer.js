import React from 'react';

function Viewer({ viewer }) {
  return (
    <div>
      <h1>Viewer</h1>
      <div>{viewer.name}</div>
    </div>
  );
}

export default Viewer;
