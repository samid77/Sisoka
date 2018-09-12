import React, { Component } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Sidebar extends Component {
  render() {
    return (
      <div className="wrapper, animico-txt6" >
        <nav id="sidebar">
            <ul className="list-unstyled components" style={{marginTop: 100}}>
                <li className="active" style={{marginLeft: 30}}>
                <a><span className="fa fa-tachometer-alt" style={{color: '#6e829b)', marginRight: 17}} />DASHBOARD</a>
                </li>
                <div className="line2" style={{marginLeft: 30}}/>
                <li style={{marginLeft: 30}}>
                <a href="/DataSiswa"><span className="fa fa-user-graduate" style={{color: '#6e829b)', marginRight: 20}} />SISWA</a>
                </li>
                <div className="line2" style={{marginLeft: 30}}/>
                <li style={{marginLeft: 30}}>
                <a href="#"><span className="fa fa-user-tie" style={{color: '#6e829b)', marginRight: 20}} />PENGAJAR</a>
                </li>
                <div className="line2" style={{marginLeft: 30}}/>
                <li style={{marginLeft: 30}}>
                <a href="#"><span className="fa fa-book-open" style={{color: '#6e829b)', marginRight: 17}} />MAPEL</a>
                </li>
                <div className="line2" style={{marginLeft: 30}}/>
                <li style={{marginLeft: 30}}>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span className="fa fa-database" style={{color: '#6e829b)', marginRight: 20}} />MASTER</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                    <a href="#">Page 1</a>
                    </li>
                    <li>
                    <a href="#">Page 2</a>
                    </li>
                    <li>
                    <a href="#">Page 3</a>
                    </li>
                    <li>
                    <a href="#">Page 3</a>
                    </li>
                </ul>
                </li>
            </ul>
        </nav>

      </div>
    )
  }
}

export default Sidebar