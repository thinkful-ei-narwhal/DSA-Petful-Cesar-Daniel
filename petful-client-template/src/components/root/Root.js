import React, { Component, Fragment } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AdoptPage from '../AdoptPage/AdoptPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import UserContext from '../../contexts/UserContext';
import apiService from '../../services/apiService';

export class Root extends Component {

  state = {
    cats: [],
    dogs: [],
    people: [],
  }

  componentDidMount() {
    apiService.getPets()
      .then(data => {
        console.log(data);
      })
    
    apiService.getPeople()
      .then(data => {
        console.log(data);
      })

  }

  render() {
    return (
      <UserContext.Provider value = {{
        pets: this.state.pets,
        people: this.state.people,
      }}>
        <Fragment>
          <main>
          <BrowserRouter>
          <ErrorPage>
            <Switch>
              <Route
                exact path = {'/'}
                component = {HomePage}/>
              <Route
                exact path = {'/adopt'}
                component = {AdoptPage}/>
            </Switch>
            </ErrorPage>
          </BrowserRouter>
          </main>
        </Fragment>
      </UserContext.Provider>
    );
  };
};

export default Root

