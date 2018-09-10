import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash'
import FaSearch from 'react-icons/lib/fa/search'

import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import AuthPage from 'pages/AuthPage';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';



class TableSiswaPage extends Component {
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
                var nomorSiswa = isi.nomor_siswa;
                var tanggalLahir = isi.tanggal_lahir;
                var alamat = isi.alamat;

                return <tr key={urutan}>
                <td scope="col">{nomor}</td>
                <td scope="col">{namaSiswa}</td>
                <td scope="col">{nomorSiswa}</td>
                <td scope="col">{tanggalLahir}</td>
                <td scope="col">{alamat}</td>
                <td scope="col">
                <button className="btn btn-warning" style={{fontSize: 12}}><FaEdit /></button>
                <button type="button" className="btn btn-danger" style={{fontSize: 12}}><FaTrash /></button>
                <Link to="/DetailSiswa"><button type="button" className="btn btn-primary" style={{fontSize: 12}}><FaSearch /></button></Link>
                </td>
            </tr>
            }
        );
  return (
    <Page
      title="Data Siswa"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage">
        <Row>
          <Col>
            <Card className="mb-3">
             <CardHeader>
                 <Link to="/tambah-siswa"><Button secondary>Tambah Siswa +</Button></Link>
             </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table hover bordered>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama Lengkap</th>
                            <th>Nomor Siswa</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hasil}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </Page>
 );
}
}

export default TableSiswaPage;
