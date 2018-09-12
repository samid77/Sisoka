import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {FaEdit, FaTrash, FaSearch} from 'react-icons/fa'

class DataSiswa extends Component {
  state = {
    dataSiswa: [],
}
componentDidMount(){
    axios.get('http://localhost:8080/ListSiswa').then(
        (ambilData) => {
            console.log(ambilData.data);
            this.setState({
                dataSiswa: ambilData.data
            });
        }
    )
}
  
      render() {
        const hasil = this.state.dataSiswa.map(
          (isi, urutan) => {
              var nomor = urutan + 1;
              var namaSiswa = isi.nama_lengkap;
              var nomorSiswa = isi.NIDN;
              var tanggalLahir = isi.tanggal_lahir;
              var alamat = isi.alamat;

              return <tr key={urutan}>
              <td scope="col">{nomor}</td>
              <td scope="col">{namaSiswa}</td>
              <td scope="col">{nomorSiswa}</td>
              <td scope="col">{tanggalLahir}</td>
              <td scope="col">{alamat}</td>
              <td scope="col">
                <button className="btn btn-warning" style={{fontSize: 12}}><FaEdit/></button>
                <button type="button" className="btn btn-red" style={{fontSize: 12}}><FaTrash/></button>
                <Link to="/DetailSiswa"><button type="button" className="btn btn-blue" style={{fontSize: 12}}><FaSearch/></button></Link>
              </td>
            </tr>
          }
      );
        return (
          <div className="wrapper">
            {/* Page Content  */}
            <div id="content" className="animico-txt3b">
              <div  className="animico-txt3" role="main" style={{marginTop: 100}}>
                <div>
                  <div className="page-title">
                    <div className="title_left">
                    </div>
                    <div className="clearfix" />
                    <div className="container">
                    <h2><b>Data Siswa </b><span><Link to="/tambah-siswa"><a><button className="btn btn-blue">Tambah Siswa + </button></a></Link></span></h2>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="x_panel">
                          <div className="x_content">
                            <table id="datatable" className="table table-striped table-bordered" style={{fontSize: 11}}>
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>NAMA LENGKAP</th>
                                  <th>NOMOR SISWA</th>
                                  <th>TANGGAL LAHIR</th>
                                  <th>ALAMAT</th>
                                  <th>ACTIONS</th>
                                </tr>
                              </thead>
                              <tbody>
                                {hasil}
                              </tbody>
                            </table>
                          </div>
                        </div>
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
export default DataSiswa;