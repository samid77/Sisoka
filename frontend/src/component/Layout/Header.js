import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaAlignJustify } from 'react-icons/fa'

class Header extends Component {

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

    render() {
        return (
            
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid" style={{color: 'white'}}>
                <img src="images/Toga.png" style={{width: 40, padding: 7,}}></img>
                <h5 style={{marginTop: 5}}><b>SISOKA</b> ADMIN</h5>

                  <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify" />
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                      <li className="nav-item active">
                        <button onClick={this.handleSidebarControlButton} type="button" id="sidebarCollapse" className="btn btn-blue" style={{marginRight: 10}}>
                            <i className="fas fa-align-left" />
                            <span><FaAlignJustify/></span>
                        </button>   
                      </li>
                      <li className="nav-item">
                        <div style={{textAlign: 'center'}}>
                            <button className="btn btn-red">Logout</button>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </nav>

        
    
        );
    }
}

export default Header;