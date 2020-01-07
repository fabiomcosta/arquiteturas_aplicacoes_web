import React from 'react';

export default () => {
  return (
    <>
      <h1>Viewer</h1>
      <div>{props.viewer.name}</div>
      <ListCustomers customers={props.allCustomers} />
    </>
  );
};
