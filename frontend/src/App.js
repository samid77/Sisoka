import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import LayoutRoute from './components/LayoutRoute'

import MainLayout from './views/MainLayout'
import Homepage from './views/Homepage';
import DataGuru from './views/DataGuru';
import DataSiswa from './views/DataSiswa';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={Homepage}
            />
            <LayoutRoute
              exact
              path="/data-siswa"
              layout={MainLayout}
              component={DataSiswa}
            />
            <LayoutRoute
              exact
              path="/data-pengajar"
              layout={MainLayout}
              component={DataGuru}
            />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    );
  }
} export default App;