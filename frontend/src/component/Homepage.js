import React, { Component } from 'react';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Sidebar from './Sidebar'
import axios from 'axios'

class Homepage extends Component {
  
    render() {
      
        return (
            <div className="wrapper">
            {/* Sidebar  */}
            <Sidebar/>
            {/* Page Content  */}
            <div id="content" className="animico-txt3b">
            <Header />
              
              <div style={{marginTop: 100}} className="animico-txt3">
              <h2><b>Dashboard</b></h2>
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
            </div>
          </div>
        );
    }
}
export default Homepage;