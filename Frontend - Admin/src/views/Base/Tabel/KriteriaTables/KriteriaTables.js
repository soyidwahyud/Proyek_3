import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Button} from 'reactstrap'

class KriteriaTables extends Component {
  constructor() {
    super();
    this.routeEdit = this.routeEdit.bind(this);
    this.routeDelete = this.routeDelete.bind(this);
    this.routeAdd = this.routeAdd.bind(this);
  }
  routeEdit()
  {
    let path = `kriteria_edit_forms`
    this.props.history.push(path);
  }
  routeDelete()
  {
    let path2 = `kriteria_tabel`
    this.props.history.push(path2);
  }
  routeAdd()
  {
    let path3 = `kriteria_add_forms`
    this.props.history.push(path3);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="10">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel Kriteria Buku
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No Kriteria Buku</th>
                    <th>Kode</th>
                    <th>Nama Kriteria</th>
                    <th>Bobot</th>
                    <th>Tipe Kriteria</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>C1</td>
                    <td>Jumlah Halaman Pada Buku</td>
                    <td>0.25</td>
                    <td>Cost</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>C2</td>
                    <td>Sasaran Buku Jelas dan Spesifik</td>
                    <td>0.75</td>
                    <td>Benefit</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>C3</td>
                    <td>Penjelasan tentang Tujuan Penulisan Buku</td>
                    <td>0.53</td>
                    <td>Benefit</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>C4</td>
                    <td>Hal Baru pada Buku Tersebut</td>
                    <td>1.2</td>
                    <td>Benefit</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>C5</td>
                    <td>Informasi Fiktif pada Buku</td>
                    <td>1.34</td>
                    <td>Cost</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>

                  <Button type="submit" size="sm" color="primary" onClick={this.routeAdd}><i className="fa fa-address-book"></i> Add </Button>
                  </tbody>
                </Table>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default KriteriaTables;
