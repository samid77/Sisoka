import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';

import Page from 'components/Page';

const TambahSiswa = () => {
  return (
    <Page title="Tambah Siswa" breadcrumbs={[{ name: 'Tambah Siswa', active: true }]}>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Input Types</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleName">Nama Lengkap</Label>
                  <Input
                    type="name"
                    name="name"
                    placeholder="Nama lengkap siswa....."
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Tanggal Lahir</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePoB">Tempat Lahir</Label>
                  <Input
                    type="name"
                    name="name"
                    placeholder="Tempat lahir siswa....."
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectReligion">Agama</Label>
                  <Input type="select" name="selectReligion">
                    <option>Islam</option>
                    <option>Katolik</option>
                    <option>Protestan</option>
                    <option>Hindu</option>
                    <option>Budha</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSex">Jenis Kelamin</Label>
                  <Input type="select" name="selectSex">
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFatherName">Nama Ayah</Label>
                  <Input
                    type="name"
                    name="name"
                    placeholder="Nama Lengkap Ayah Siswa siswa....."
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectAyah">Pekerjaan Ayah</Label>
                  <Input type="select" name="selectAyah">
                    <option>Wiraswasta</option>
                    <option>Karyawan Swasta</option>
                    <option>PNS</option>
                    <option>Lainnya</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleMotherName">Nama Ibu</Label>
                  <Input
                    type="name"
                    name="name"
                    placeholder="Nama Lengkap Ibu Siswa siswa....."
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectIbu">Pekerjaan Ibu</Label>
                  <Input type="select" name="selectIbu">
                    <option>Wiraswasta</option>
                    <option>Karyawan Swasta</option>
                    <option>PNS</option>
                    <option>Ibu Rumah Tangga</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" />
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
                </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default TambahSiswa;
