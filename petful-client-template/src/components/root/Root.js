import React, { Component, Fragment } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AdoptPage from '../AdoptPage/AdoptPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import UserContext from '../../contexts/UserContext';
import apiService from '../../services/apiService';

const Queue = require('../../queue/Queue');

export class Root extends Component {

  state = {
    cats: new Queue(),
    dogs: new Queue(),
    people: new Queue(),
  }

  componentDidMount() {
    apiService.getPets()
      .then(data => {
        let cData = data.cats.first;
        this.setState(this.state.cats.enqueue(cData.data))
        let nc = cData.next;
        while(nc) {
          this.setState(this.state.cats.enqueue(nc.data))
          nc = nc.next
        }
        let dData = data.dogs.first;
        this.setState(this.state.dogs.enqueue(dData.data))
        let nd = dData.next;
        while(nd) {
          this.setState(this.state.dogs.enqueue(nd.data))
          nd = nd.next
        }
      })
    
    apiService.getPeople()
      .then(data => {
        let pData = data.first;
        this.setState(this.state.people.enqueue(pData.data))
        let np = pData.next;
        while(np) {
          this.setState(this.state.people.enqueue(np.data))
          np = np.next
        }
      })

  }

  render() {
    return (
      <UserContext.Provider value = {{
        cats: this.state.cats,
        dogs: this.state.dogs,
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

