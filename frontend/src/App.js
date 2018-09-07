import React, { Component } from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Homepage from './component/Homepage';
import DataSiswa from './component/DataSiswa';
import TambahSiswa from './component/TambahSiswa';
import DetailSiswa from './component/DetailSiswa';
import EditSiswa from './component/EditSiswa';

import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Homepage" component={Homepage}/>
      <Route path="/Header" component={Header}/>
      <Route path="/DataSiswa" component={DataSiswa}/>
      <Route path="/TambahSiswa" component={TambahSiswa}/>
      <Route path="/DetailSiswa" component={DetailSiswa}/>
      <Route path="/EditSiswa" component={EditSiswa}/>
      </div>
    );
  }
} export default App;