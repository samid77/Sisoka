import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,Breadcrumb, BreadcrumbItem,
    CardTitle, CardSubtitle, Button, Row, Col, Container, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios'

class DataGuru extends Component {
  
    render() {
      
        return (
            <div>
            <Container fluid style={{marginTop: 100}}>
                <Row>
                    <Col md={12}>
                        <h2>Data Pengajar<span style={{marginLeft: 20}}><Button color= "info">+ Tambah Pengajar</Button></span></h2>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="/">Dashboard</a></BreadcrumbItem>
                            <BreadcrumbItem active>Data Pengajar</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col>
                        <Card style={{textAlign: "center", marginTop: 10, width: 150}}>
                            <CardImg src="http://smknegeri9garut.sch.id/wp-content/uploads/2015/02/DSC_0328.gif" alt="Card image cap"/>
                            <CardBody className="animico-txt2b">
                                    <CardTitle>Suparmadi S.IP</CardTitle>
                                <CardSubtitle>NIP 131002803909</CardSubtitle>
                                <Button color= "info">Detail</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign: "center", marginTop: 10, width: 150}}>
                            <CardImg src="http://smknegeri9garut.sch.id/wp-content/uploads/2015/02/DSC_0415.gif" alt="Card image cap"/>
                            <CardBody className="animico-txt2b">
                                    <CardTitle>Suparmadi S.IP</CardTitle>
                                <CardSubtitle>NIP 131002803909</CardSubtitle>
                                <Button color= "info">Detail</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign: "center", marginTop: 10, width: 150}}>
                            <CardImg src="http://smknegeri9garut.sch.id/wp-content/uploads/2015/02/DSC_0315.gif" alt="Card image cap"/>
                            <CardBody className="animico-txt2b">
                                    <CardTitle>Suparmadi S.IP</CardTitle>
                                <CardSubtitle>NIP 131002803909</CardSubtitle>
                                <Button color= "info">Detail</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign: "center", marginTop: 10, width: 150}}>
                            <CardImg src="http://smknegeri9garut.sch.id/wp-content/uploads/2015/02/DSC_0331.gif" alt="Card image cap"/>
                            <CardBody className="animico-txt2b">
                                    <CardTitle>Suparmadi S.IP</CardTitle>
                                <CardSubtitle>NIP 131002803909</CardSubtitle>
                                <Button color= "info">Detail</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign: "center", marginTop: 10, width: 150}}>
                            <CardImg src="http://smknegeri9garut.sch.id/wp-content/uploads/2015/02/DSC_0361.gif" alt="Card image cap"/>
                            <CardBody className="animico-txt2b">
                            <CardTitle>Suparmadi S.IP</CardTitle>
                                <CardSubtitle>NIP 131002803909</CardSubtitle>
                                <Button color= "info">Detail</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default DataGuru;