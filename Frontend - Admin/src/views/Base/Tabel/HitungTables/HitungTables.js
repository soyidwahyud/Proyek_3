import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class HitungTables extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel Penilaian SAW
              </CardHeader>
              <CardBody>
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
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>A1</td>
                    <td>0,667</td>
                    <td>0,714</td>
                    <td>0,875</td>
                    <td>1</td>
                    <td>0,778</td>
                  </tr>
                  <tr>
                    <td>A2</td>
                    <td>0,444</td>
                    <td>0,857</td>
                    <td>1</td>
                    <td>0,625</td>
                    <td>0,875</td>
                  </tr>
                  <tr>
                    <td>A3</td>
                    <td>1</td>
                    <td>0,571</td>
                    <td>1</td>
                    <td>0,75</td>
                    <td>0,875</td>
                  </tr>
                  <tr>
                    <td>A4</td>
                    <td>0,8</td>
                    <td>1</td>
                    <td>0,75</td>
                    <td>0,75</td>
                    <td>1</td>
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
                    <td>3,408</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>V2</td>
                    <td>3,206</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>V3</td>
                    <td>3,281</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>V4</td>
                    <td>3,588</td>
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

export default HitungTables;
