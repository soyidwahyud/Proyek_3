import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Hitung2Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel Penilaian WP
              </CardHeader>
              <CardBody>
                Bobot per Kriteria
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Kriteria</th>
                    <th>Wj</th>
                    <th>Wj Ternormalisasi</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>C1</td>
                    <td>0,061</td>
                    <td>-0,061</td>

                  </tr>
                  <tr>
                    <td>C2</td>
                    <td>0,184</td>
                    <td>0,184</td>
                  </tr>
                  <tr>
                    <td>C3</td>
                    <td>0,130</td>
                    <td>0,130</td>
                  </tr>
                  <tr>
                    <td>C4</td>
                    <td>0,295</td>
                    <td>0,295</td>
                  </tr>
                  <tr>
                    <td>C5</td>
                    <td>0,329</td>
                    <td>-0,329</td>
                  </tr>
                  </tbody>
                </Table>

                <br/>
                Normalisasi
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Alternatif</th>
                    <th>C1</th>
                    <th>C2</th>
                    <th>C3</th>
                    <th>C4</th>
                    <th>C5</th>
                    <th>Si</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>A1</td>
                    <td>0,8958</td>
                    <td>1,3452</td>
                    <td>1,2884</td>
                    <td>1,8462</td>
                    <td>0,4851</td>
                    <td>1,3904</td>
                  </tr>
                  <tr>
                    <td>A2</td>
                    <td>0,8737</td>
                    <td>1,3912</td>
                    <td>1,3110</td>
                    <td>1,6073</td>
                    <td>0,5043</td>
                    <td>1,2916</td>
                  </tr>
                  <tr>
                    <td>A3</td>
                    <td>0,9184</td>
                    <td>1,2911</td>
                    <td>1,3110</td>
                    <td>1,6960</td>
                    <td>0,5043</td>
                    <td>1,3294</td>
                  </tr>
                  <tr>
                    <td>A4</td>
                    <td>0,9059</td>
                    <td>1,4313</td>
                    <td>1,2628</td>
                    <td>1,6960</td>
                    <td>0,5269</td>
                    <td>1,4633</td>
                  </tr>
                  </tbody>
                </Table>
                <br/>
                Perankingan
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nilai</th>
                    <th>Ranking</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>V1</td>
                    <td>0,254</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>V2</td>
                    <td>0,2359</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>V3</td>
                    <td>0,2428</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>V4</td>
                    <td>0,2673</td>
                    <td>1</td>
                  </tr>
                  </tbody>
                </Table>
                <nav>

                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Hitung2Tables;
