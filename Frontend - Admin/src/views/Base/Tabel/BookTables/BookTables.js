import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Button} from 'reactstrap'

class BookTables extends Component {
  constructor() {
    super();
    this.routeEdit = this.routeEdit.bind(this);
    this.routeDelete = this.routeDelete.bind(this);
    this.routeAdd = this.routeAdd.bind(this);
  }
  routeEdit()
  {
    let path = `buku_edit_forms`
    this.props.history.push(path);
  }
  routeDelete()
  {
    let path2 = `buku_tabel`
    this.props.history.push(path2);
  }
  routeAdd()
  {
    let path3 = `buku_add_forms`
    this.props.history.push(path3);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="15" lg="15">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel Buku
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No Buku</th>
                    <th>Kode Buku</th>
                    <th>Nama Buku</th>
                    <th>Jenis Buku</th>
                    <th>Nama Penerbit</th>
                    <th>Nama Penulis</th>
                    <th>Gambar</th>
                    <th>User File</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>A1</td>
                    <td>Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non</td>
                    <td>Teknik</td>
                    <td>Erlangga</td>
                    <td>Soyid Wahyu D</td>
                    <td>Buku1.jpg</td>
                    <td>Buku1.pdf</td>

                    <td>
                      <Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button>
                    </td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>

                  </tr>
                  <tr>
                    <td>2</td>
                    <td>A2</td>
                    <td>Turbin Air, Teori dan Dasar Perencanaan</td>
                    <td>Teknik</td>
                    <td>Yudhistira</td>
                    <td>Soyid Wahyu D</td>
                    <td>Buku2.jpg</td>
                    <td>Buku2.pdf</td>

                    <td>
                      <Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button>
                    </td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>A3</td>
                    <td>Memahami Beton Berulang</td>
                    <td>Teknik</td>
                    <td>Erlangga</td>
                    <td>Sofiul</td>
                    <td>Buku3.jpg</td>
                    <td>Buku3.pdf</td>

                    <td>
                      <Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button>
                    </td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>A4</td>
                    <td>Termodinamika Dasar Mesin Konversi Energi</td>
                    <td>Teknik</td>
                    <td>Erlangga</td>
                    <td>Devany</td>
                    <td>Buku4.jpg</td>
                    <td>Buku4.pdf</td>

                    <td>
                      <Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button>
                    </td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>

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

export default BookTables;
