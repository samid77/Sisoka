import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,Breadcrumb, BreadcrumbItem,
    CardTitle, CardSubtitle, Button, Row, Col, Container, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import {FaEdit, FaTrash, FaSearch} from 'react-icons/fa'
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios'

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
                    <button type="button" className="btn btn-danger" style={{fontSize: 12, marginLeft: 10}}><FaTrash/></button>
                    <Link to="/DetailSiswa"><button type="button" className="btn btn-primary" style={{fontSize: 12,  marginLeft: 10}}><FaSearch/></button></Link>
                    </td>
                </tr>
                }
            );

        return (
            <Container fluid style={{marginTop: 100}}>
                <Row>
                    <Col md={12}>
                        <h2>Data Siswa<span style={{marginLeft: 20}}><Button color= "info">+ Tambah Siswa</Button></span></h2>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Dashboard</a></BreadcrumbItem>
                            <BreadcrumbItem active>Data Siswa</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">Jenjang</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Pilih Jenjang</option>
                                        <option>Kelas X</option>
                                        <option>Kelas XI</option>
                                        <option>Kelas XII</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">Jurusan</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Pilihan Jurusan</option>
                                        <option>IPA</option>
                                        <option>IPS</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">Kelas</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Pilih Kelas</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                        <option>F</option>
                                        <option>G</option>
                                        <option>H</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        </Row>

                        <Table bordered hover>
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
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default DataSiswa;