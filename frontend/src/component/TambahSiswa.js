import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class AddProduct extends Component {
  state = {
    redirect: false,
    listukuran: [],
    listkategori: [],
    kategoriID: '',
    ukuranproduk: '',
    namaproduk: '',
    hargaproduk: '',
    detailproduk: '',
    gambarproduk: '',
}

componentDidMount(){
  axios.get('http://localhost:8002/AddProduct').then(
      (ambilData) => {
          // console.log(ambilData.data);
          console.log(ambilData.data[0]);
          console.log(ambilData.data[1]);
          this.setState({
            listkategori: ambilData.data[0],
            listukuran: ambilData.data[1]
              
          });
      }
  )
}

gambar = (e) => {
  switch(e.target.name){
    case 'gambarproduk' : 
    this.setState({
      gambarproduk:e.target.files[0]
    })
    break;
    default:
  }
}

tambahData = (e) => {
  var kategoriID = e.listkategori.value;
  var ukuranproduk = e.listukuran.value;
  var namaproduk = e.namaproduk.value;
  var hargaproduk = e.hargaproduk.value;
  var detailproduk = e.detailproduk.value;

        this.setState({
          kategoriID: kategoriID,
          ukuranproduk: ukuranproduk,
          namaproduk: namaproduk,
          hargaproduk: hargaproduk,
          detailproduk: detailproduk,
        }) 
      }

kirimsemua = (e) => {
  e.preventDefault();
  let formproduk = new FormData();
  formproduk.append('katid', this.state.kategoriID);
  formproduk.append('sizeprod', this.state.ukuranproduk);
  formproduk.append('namaprod', this.state.namaproduk);
  formproduk.append('hargaprod', this.state.hargaproduk);
  formproduk.append('detailprod', this.state.detailproduk);
  formproduk.append('gambarprod', this.state.gambarproduk);

  axios.post('http://localhost:8002/AddProduct', formproduk).then((hasil) => {
    var respon = hasil.data; 
    if(respon === 1) 
    {
      this.setState({
        redirect: true
      })
    }
  })

  // console.log(this.state.kategoriID)
  // console.log(this.state.ukuranproduk)
  // console.log(this.state.namaproduk)
  // console.log(this.state.hargaproduk)
  // console.log(this.state.detailproduk)
  // console.log(this.state.gambarproduk)
}

    render() {
      if (this.state.redirect) return <Redirect to="/Products"/>

      const listukuran = this.state.listukuran.map((item, index) => {
        
        var itemID = item.id;
        var nameSize = item.size_name; 
        return <option key={index} value={itemID}>{nameSize}</option>
        
      }) 
      const listkategori = this.state.listkategori.map((item, index) => {
        
        var itemID = item.id;
        var nameCategory = item.category_name; 
        return <option key={index} value={itemID}>{nameCategory}</option>
        
      }) 

      
        return (

          <div className="wrapper">
          {/* Sidebar  */}
          <Sidebar />
          {/* Page Content  */}
          <div id="content">
            <div className="right_col" role="main">
              <div className>
                <div className="page-title">
                  <div className="title_left" style={{textAlign: 'center'}}>
                    <h2><b>Tambah Siswa</b></h2>
                  </div><br />
                  <div className="clearfix" />
                  <div className="row">
                    {/* <div className="col-md-12">
                      <form onSubmit={this.kirimsemua} className="form-horizontal form-label-left">
                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Category</label>
                          <div className="col-md-3 col-sm-3 col-xs-12">
                            <select ref="listkategori" className="form-control">
                              {listkategori}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Name <span className="required">*</span>
                          </label>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <input ref="namaproduk" type="text" required="required" className="form-control col-md-7 col-xs-12" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Price <span className="required">*</span>
                          </label>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <input ref="hargaproduk" type="number"  required="required" className="form-control col-md-7 col-xs-12" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Size</label>
                          <div className="col-md-3 col-sm-3 col-xs-12">
                            <select ref="listukuran" className="form-control">
                              {listukuran}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Image <span className="required">*</span>
                          </label>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <input name="gambarproduk" onChange={this.gambar} type="file" required="required" className="form-control col-md-7 col-xs-12" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Detail <span className="required">*</span>
                          </label>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <textarea ref="detailproduk" type="text" className="form-control col-md-7 col-xs-12" placeholder="Enter Detail" defaultValue={""} />
                          </div>
                        </div>
                        <div className="ln_solid" />
                        <div className="form-group">
                          <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                            <a href="/Products"><button className="btn btn-red" type="button">Cancel</button></a>
                            <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-green">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        );
    }
}
export default AddProduct;