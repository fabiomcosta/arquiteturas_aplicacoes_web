import React from 'react';

function ListCustomers({ customers }) {
  return (
    <div>
      <h1>Customers</h1>
      {customers.map(customer => (
        <div key={customer.id}>
          <strong>name: </strong>
          {customer.name}
        </div>
      ))}
    </div>
  );
}

export default ListCustomers;
