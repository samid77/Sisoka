import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TambahSiswa extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="content" className="animico-txt3b">
          <div  className="animico-txt3" role="main" style={{marginTop: 100}}>

            <div className="page-title">
              <div className="title_left">
                <h2><b>Tambah Data Siswa </b></h2><hr />
              </div>
            </div>
            <div className="col-md-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/DataSiswa"><a>Daftar Siswa</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Form Data Siswa</li>
                </ol>
              </nav>
            </div>
            <div className="container" style={{marginTop: 50}}>
              <div className="col-md-10">
                <form style={{border: '2px solid #b7fbff', borderRadius: '20px', padding:'40px'}}>
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Masukan nama lengkap siswa" />
                  </div>
                  <div className="form-group">
                    <label>Tanggal Lahir</label>
                    <input type="date" className="form-control" placeholder="Masukan nama lengkap siswa" />
                  </div>
                  <div className="form-group">
                    <label>Tempat Lahir</label>
                    <input type="text" className="form-control" placeholder="Masukan tempat lahir siswa" />
                  </div>
                  <div className="form-group">
                    <label>Nama Ayah</label>
                    <input type="text" className="form-control" placeholder="Masukan nama lengkap siswa" />
                  </div>
                  <div className="form-group">
                    <label>Pekerjaan Ayah</label>
                    <select className="form-control">
                      <option>Wiraswasta</option>
                      <option>Karyawan Swasta</option>
                      <option>PNS</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nama Ibu</label>
                    <input type="text" className="form-control" placeholder="Masukan nama lengkap siswa" />
                  </div>
                  <div className="form-group">
                    <label>Pekerjaan Ibu</label>
                    <select className="form-control">
                      <option>Wiraswasta</option>
                      <option>Karyawan Swasta</option>
                      <option>PNS</option>
                      <option>Ibu Rumah Tangga</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Agama</label>
                    <select className="form-control">
                      <option>Islam</option>
                      <option>Kristen</option>
                      <option>Katolik</option>
                      <option>Protestan</option>
                      <option>Hindu</option>
                      <option>Budha</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <select className="form-control">
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Alamat</label>
                    <textarea className="form-control" rows={3} defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-primary">Submit</button>
                  </div>
              </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default TambahSiswa;
