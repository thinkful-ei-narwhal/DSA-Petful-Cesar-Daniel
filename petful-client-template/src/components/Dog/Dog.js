import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

export class Dog extends Component {

  static contextType = UserContext;

  render() {
    const current = this.context.dogs.first.data;

    return (
      <div>
        <h3>Dog</h3>
        <img className='picture' src={`${current.imageURL}`}/>
        <p>Name: {`${current.name}`}</p>
        <p>Description: {`${current.description}`}</p>
        <p>Gender: {`${current.gender}`}</p>
        <p>Age: {`${current.age}`}</p>
        <p>Breed: {`${current.breed}`}</p>
        <p>{`${current.name}`}'s Story: {`${current.story}`}</p>
        <button>Adopt Me!</button>
      </div>
    )
  }
}

export default Dog
