import React from 'react';
import Queue from '../queue/Queue';

const UserContext = React.createContext({
  cats: new Queue,
  dogs: new Queue,
  people: new Queue,
  name: {value: '', touched: false},
  validateName: () => {},
  setName: () => {},
  handleUpdatePeople: () => {},
  handleAdoptAnimal: () => {},
  handleDeletePerson: () => {},
});

export default UserContext;