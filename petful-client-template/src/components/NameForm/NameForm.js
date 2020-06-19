import React, { Component } from 'react'
import ValidationError from '../ValidationError'

export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      }
    };
  }

  validateName() {
    const name = this.state.name.value;
    if (!name) {
      return 'name is required';
    } 
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }


  render() {
    const nameError = this.validateName();
    return (
      <form>
        {this.state.name.touched && <ValidationError message={nameError} />}
        <label htmlFor='name'>name:</label>
        <input type= 'text' name='name' id= 'name' 
        onChange={(e) => this.updateName(e.target.value)}>
        </input>
    
        <button type= 'submit' value='Submit' disabled={this.validateName()}>
          Submit
        </button>
      </form>
    )
  }
}

export default NameForm
