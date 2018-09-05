import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class DataSiswa extends Component {
  state = {
    dataproduk: [],
}
componentDidMount(){
    axios.get('http://localhost:8002/Product').then(
        (ambilData) => {
            console.log(ambilData.data);
            this.setState({
                dataproduk: ambilData.data
            });
        }
    )
}

hapusData = (e) => {
  axios.post(`http://localhost:8002/RemoveProduct`, {
      inputNol: e,
    }).then(
      (ambilData) => {
          console.log(ambilData.data);
          if (ambilData.data === 1) {
            axios.get('http://localhost:8002/Product').then(
              (ambilData) => {
                  console.log(ambilData.data);
                  this.setState({
                      dataproduk: ambilData.data
                  });
              }
          )
          }
        })
          console.log(e)
      }
  
      render() {
        const hasil = this.state.dataproduk.map(
          (isi, urutan) => {
              var nomor = urutan + 1;
              var produkID = isi.id;
              var kategoriID = isi.id_category;
              var ukuranproduk = isi.id_size;
              var namaproduk = isi.product_name;
              var hargaproduk = isi.product_price;
              var detailproduk = isi.product_detail;
              var gambarproduk = isi.product_image;
               
              return <tr key={urutan}>
              <td scope="col">{nomor}</td>
              <td scope="col">{namaproduk}</td>
              <td scope="col">{kategoriID}</td>
              <td scope="col">{hargaproduk}</td>
              <td scope="col">{gambarproduk}</td>
              <td scope="col">{detailproduk}</td>
              <td scope="col">
                <Link to={{
                  pathname: "/EditProduct",
                  state:{
                    prodID: produkID,
                    katID: kategoriID,
                    prodnama: namaproduk,
                    prodharga: hargaproduk,
                    prodetail: detailproduk,
                    prodgarmabar: gambarproduk


                  }
                }}>
                <button className="btn btn-yellow" style={{fontSize: 12}}><span className="fa fa-edit" aria-hidden="true" /></button></Link>
                <button type="button" onClick={() => this.hapusData(produkID)}className="btn btn-red" style={{fontSize: 12}}><span className="fa fa-trash" aria-hidden="true" /></button>
              </td>
            </tr>
          }
      );
        return (
          <div className="wrapper">
            {/* Sidebar  */}
            <Sidebar />
            {/* Page Content  */}
            <div id="content" className="animico-txt3b">
            <Header />
              <div  className="animico-txt3" role="main" style={{marginTop: 100}}>
                <div>
                  <div className="page-title">
                    <div className="title_left">
                      <h2><b>Data Siswa </b><span><a href="/TambahSiswa"><button className="btn btn-blue">Tambah Siswa + </button></a></span></h2>
                    </div>
                    <div className="clearfix" />
                    <div className="container">
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
                                  <th>TEMPAT LAHIR</th>
                                  <th>NAMA AYAH</th>
                                  <th>NAMA IBU</th> 
                                  <th>AGAMA</th> 
                                  <th>JENIS KELAMIN</th> 
                                  <th>ALAMAT</th> 
                                  <th>CREATED</th> 
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