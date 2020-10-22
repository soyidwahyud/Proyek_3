import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {Button} from 'reactstrap'

class UserTables extends Component {
  constructor() {
    super();
    this.routeEdit = this.routeEdit.bind(this);
    this.routeDelete = this.routeDelete.bind(this);
  }
  routeEdit()
  {
    let path = `user_forms`
    this.props.history.push(path);
  }
  routeDelete()
  {
    let path2 = `user_tabel`
    this.props.history.push(path2);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="15" lg="15">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel User
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No User</th>
                    <th>Username User</th>
                    <th>Email User</th>
                    <th>Password User</th>
                    <th>Nama User</th>
                    <th>jabatan</th>
                    <th>alamat</th>
                    <th>Telp</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>wahyu</td>
                    <td>wahyu@yahoo.com</td>
                    <td>$2b$12$uk2tkeOJ2Z5j1SNUFcf94OOP.2p2w5pmUfqeO6X95jiTpdpTDyt0.</td>
                    <td>wahyu</td>
                    <td>Kepala Divisi IT</td>
                    <td>Jalan Jakartaa</td>
                    <td>080989999</td>

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

export default UserTables;
