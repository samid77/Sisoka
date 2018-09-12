import React, { Component } from 'react';
import Header from './component/Layout/Header';
import Sidebar from './component/Layout/Sidebar';
import Page from './component/Layout/Page';
import Homepage from './component/Homepage';
import DataSiswa from './component/DataSiswa';
import TambahSiswa from './component/TambahSiswa';
import EditSiswa from './component/EditSiswa';

import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import LayoutRoute from './component/Layout/LayoutRoute'
import MainLayout from './component/Layout/MainLayout'

import './css/style.css';
import './css/tai.css';



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
              path="/tambah-siswa"
              layout={MainLayout}
              component={TambahSiswa}
            />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    );
  }
} export default App;