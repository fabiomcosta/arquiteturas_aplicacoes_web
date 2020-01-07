import React from 'react';

export default () => {
  return (
    <div>
      <Viewer viewer={props.viewer} />
      <ListCustomers customers={props.allCustomers} />
    </div>
  );
};
