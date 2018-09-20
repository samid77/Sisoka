import React, { Component } from 'react';
import { 
  Card, 
  CardTitle, 
  Container, 
  CardText, 
  CardImg, 
  CardImgOverlay, 
  Row, 
  Col, 
  Breadcrumb, 
  BreadcrumbItem,
  CardHeader,
  CardBody,
  Button,
  CardFooter } from 'reactstrap';

class DataGuru extends Component {
  
    render() {
      
        return (
            <div>
            <Container fluid style={{marginTop: 100}}>
                <Row>
                    <Col md={12}>
                        <h2>DASHBOARD</h2>
                        <Breadcrumb>
                            <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col>
                      <Card body inverse color="warning">
                        <CardBody>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                      </Card>
                    </Col>
                    <Col>
                      <Card body inverse color="danger">
                        <CardBody>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                      </Card>
                    </Col>
                    <Col>
                      <Card body inverse color="success">
                        <CardBody>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                      </Card>
                    </Col>
                    <Col>
                      <Card body inverse color="primary"> 
                        <CardBody>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                      </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default DataGuru;