import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios'

class DataPengajar extends Component {
  
    render() {
      
        return (
             <div className="wrapper">
                <div id="content" className="animico-txt3b">
                    <div style={{marginTop: 100}} className="animico-txt3">
                        <Container>
                        <div className="page-title">
                            <div className="title_left">
                                <h4><b>DATA PENGAJAR</b></h4><hr />
                            </div>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Data Pengajar</li>
                            </ol>
                        </nav>
                            <Row>
                                <Col md={3}>
                                    <Card style={{textAlign: "center", marginTop: 10, width: 200}}>
                                        <CardImg src="data:image/png;base64,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" alt="Card image cap"/>
                                        <CardBody className="animico-txt2b">
                                                <CardSubtitle>Suparmadi S.IP</CardSubtitle>
                                            <CardText>NIP 131002803909</CardText>
                                            <Button>Detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{textAlign: "center", marginTop: 10, width: 200}}>
                                        <CardImg src="data:image/png;base64,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" alt="Card image cap"/>
                                        <CardBody className="animico-txt2b">
                                                <CardSubtitle>Suparmadi S.IP</CardSubtitle>
                                            <CardText>NIP 131002803909</CardText>
                                            <Button>Detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{textAlign: "center", marginTop: 10, width: 200}}>
                                        <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBH-sZHRxmQRYN9u7zIAG6wCSAL1KVxcz5xloEOljyRNzxwM7" alt="Card image cap"/>
                                        <CardBody className="animico-txt2b">
                                                <CardSubtitle>Suparmadi S.IP</CardSubtitle>
                                            <CardText>NIP 131002803909</CardText>
                                            <Button>Detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{textAlign: "center", marginTop: 10, width: 200}}>
                                        <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWofxGWrtIp8vPGD5bd378UepbMcuT-DH1NlA6YsvveYC7o6iOHw" alt="Card image cap"/>
                                        <CardBody className="animico-txt2b">
                                                <CardSubtitle>Suparmadi S.IP</CardSubtitle>
                                            <CardText>NIP 131002803909</CardText>
                                            <Button>Detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}
export default DataPengajar;