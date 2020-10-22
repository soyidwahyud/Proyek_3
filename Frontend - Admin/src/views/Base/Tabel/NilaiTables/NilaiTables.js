import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Button} from 'reactstrap'

class NilaiTables extends Component {
  constructor() {
    super();
    this.routeEdit = this.routeEdit.bind(this);
    this.routeDelete = this.routeDelete.bind(this);
    this.routeAdd = this.routeAdd.bind(this);
  }
  routeEdit()
  {
    let path = `nilai_edit_forms`
    this.props.history.push(path);
  }
  routeDelete()
  {
    let path2 = `nilai_tabel`
    this.props.history.push(path2);
  }
  routeAdd()
  {
    let path3 = `nilai_add_forms`
    this.props.history.push(path3);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="20">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel Penilaian Buku
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No Nilai Buku</th>
                    <th>Kode Buku</th>
                    <th>Nama Buku</th>
                    <th>Kode</th>
                    <th>Nama Kriteria</th>
                    <th>Bobot</th>
                    <th>Nilai Buku</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  {/*1*/}
                  <tr>
                    <td>1</td>
                    <td>A1</td>
                    <td>Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non</td>
                    <td>C1</td>
                    <td>Jumlah Halaman pada Buku</td>
                    <td>0.25</td>
                    <td>5</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>A1</td>
                    <td>Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non</td>
                    <td>C2</td>
                    <td>Sasaran Buku Jelas dan Spesifik</td>
                    <td>0.75</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>A1</td>
                    <td>Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non</td>
                    <td>C3</td>
                    <td>Penjelasan tentang Tujuan Penulisan Buku</td>
                    <td>0.53</td>
                    <td>7</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>A1</td>
                    <td>Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non</td>
                    <td>C4</td>
                    <td>Hal Baru pada Buku Tersebut</td>
                    <td>1.2</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>A1</td>
                    <td>Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non</td>
                    <td>C5</td>
                    <td>Informasi Fiktif pada Buku</td>
                    <td>1.34</td>
                    <td>4</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>6</td>
                    <td>A2</td>
                    <td>Turbin Air, Teori dan Dasar Perencanaan</td>
                    <td>C1</td>
                    <td>Jumlah Halaman pada Buku</td>
                    <td>0.25</td>
                    <td>5</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>A2</td>
                    <td>Turbin Air, Teori dan Dasar Perencanaan</td>
                    <td>C2</td>
                    <td>Sasaran Buku Jelas dan Spesifik</td>
                    <td>0.75</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>A2</td>
                    <td>Turbin Air, Teori dan Dasar Perencanaan</td>
                    <td>C3</td>
                    <td>Penjelasan tentang Tujuan Penulisan Buku</td>
                    <td>0.53</td>
                    <td>7</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>A2</td>
                    <td>Turbin Air, Teori dan Dasar Perencanaan</td>
                    <td>C4</td>
                    <td>Hal Baru pada Buku Tersebut</td>
                    <td>1.2</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>A2</td>
                    <td>Turbin Air, Teori dan Dasar Perencanaan</td>
                    <td>C5</td>
                    <td>Informasi Fiktif pada Buku</td>
                    <td>1.34</td>
                    <td>4</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>11</td>
                    <td>A3</td>
                    <td>Memahami Beton Bertulang</td>
                    <td>C1</td>
                    <td>Jumlah Halaman pada Buku</td>
                    <td>0.25</td>
                    <td>5</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>A3</td>
                    <td>Memahami Beton Bertulang</td>
                    <td>C2</td>
                    <td>Sasaran Buku Jelas dan Spesifik</td>
                    <td>0.75</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>A3</td>
                    <td>Memahami Beton Bertulang</td>
                    <td>C3</td>
                    <td>Penjelasan tentang Tujuan Penulisan Buku</td>
                    <td>0.53</td>
                    <td>7</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>A3</td>
                    <td>Memahami Beton Bertulang</td>
                    <td>C4</td>
                    <td>Hal Baru pada Buku Tersebut</td>
                    <td>1.2</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>A3</td>
                    <td>Memahami Beton Bertulang</td>
                    <td>C5</td>
                    <td>Informasi Fiktif pada Buku</td>
                    <td>1.34</td>
                    <td>4</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>16</td>
                    <td>A4</td>
                    <td>Termodinamika Dasar Mesin Konversi Energi</td>
                    <td>C1</td>
                    <td>Jumlah Halaman pada Buku</td>
                    <td>0.25</td>
                    <td>5</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>A4</td>
                    <td>Termodinamika Dasar Mesin Konversi Energi</td>
                    <td>C2</td>
                    <td>Sasaran Buku Jelas dan Spesifik</td>
                    <td>0.75</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>A4</td>
                    <td>Termodinamika Dasar Mesin Konversi Energi</td>
                    <td>C3</td>
                    <td>Penjelasan tentang Tujuan Penulisan Buku</td>
                    <td>0.53</td>
                    <td>7</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>A4</td>
                    <td>Termodinamika Dasar Mesin Konversi Energi</td>
                    <td>C4</td>
                    <td>Hal Baru pada Buku Tersebut</td>
                    <td>1.2</td>
                    <td>8</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>A4</td>
                    <td>Termodinamika Dasar Mesin Konversi Energi</td>
                    <td>C5</td>
                    <td>Informasi Fiktif pada Buku</td>
                    <td>1.34</td>
                    <td>4</td>
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

export default NilaiTables;
