import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'
import axios from 'axios'

class Homepage extends Component {
  
    render() {
      
        return (
            <div className="wrapper">
            {/* Page Content  */}
            <div id="content" className="animico-txt3b">
              <div style={{marginTop: 100}} className="animico-txt3">
              
                <div className="container">
                <h2><b>Dashboard</b></h2>
                  <div className="row">
                    <div className="col col-md-4">
                      <div className="card text-white bg-info mb-3" style={{maxWidth:' 18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">Info card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-4">
                      <div className="card text-white bg-success mb-3" style={{maxWidth:' 18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">Info card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-4">
                      <div className="card text-white bg-primary mb-3" style={{maxWidth:' 18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">Info card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Homepage;