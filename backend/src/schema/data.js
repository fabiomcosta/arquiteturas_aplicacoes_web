/**
 * Think about this file as being your data CRUD layer.
 * You'll either be communicating to an API or a database directly
 * to create, read, update and delete data (CRUD).
 */

/**
 * Mock data. In a real app it would be located in a database or API.
 */
const Customer = {
  '1': {
    id: '1',
    name: 'Dr. Dentitos',
    locations: ['1']
  },
  '2': {
    id: '2',
    name: 'Sorisso Bucal',
    locations: ['2', '3', '4']
  },
  '3': {
    id: '3',
    name: 'Dra. Renata',
    locations: ['5']
  }
};

const Location = {
  '1': {
    id: '1',
    name: 'Consultorio particular',
    address: 'Rua dos Canarios, 1234'
  },
  '2': {
    id: '2',
    name: 'Consultorio do Dr. Aleixo',
    address: 'Rua dos Alecrins do Olegario, 11392'
  },
  '3': {
    id: '3',
    name: 'Consultorio da Dra. Padilha',
    address: 'Rua Cobra Coral, 12'
  },
  '4': {
    id: '4',
    name: 'Consultorio do Dr. Manoel',
    address: 'Rua Sampaio Correia de Araujo Nunez, 123'
  },
  '5': {
    id: '5',
    name: 'Consultorio particular',
    address: 'Rua das Vieiras Amarelas, 89046'
  }
};

const User = {
  '1': {
    id: '1',
    name: 'Felipe Miranda Costa'
  },
  '2': {
    id: '2',
    name: 'Tiago Miranda Costa'
  }
};

const data = {
  Customer,
  Location,
  User
};

// These would be your CRUD functions.
// They didn't need to be async, but in the real world they are, so I
// decided to make them async.

export async function getCustomer(id) {
  return data.Customer[id];
}

export async function getLocation(id) {
  return data.Location[id];
}

export async function getUser(id) {
  return data.User[id];
}

export async function getAllCustomers() {
  return Object.values(data.Customer);
}

export async function getAllUsers() {
  return Object.values(data.User);
}

export async function getAllLocations() {
  return Object.values(data.Location);
}
