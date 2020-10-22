import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Button} from 'reactstrap'

class JabatanTables extends Component {
  constructor() {
    super();
    this.routeEdit = this.routeEdit.bind(this);
    this.routeDelete = this.routeDelete.bind(this);
    this.routeAdd = this.routeAdd.bind(this);
  }
  routeEdit()
  {
    let path = `jabatan_edit_forms`
    this.props.history.push(path);
  }
  routeDelete()
  {
    let path2 = `jabatan_tabel`
    this.props.history.push(path2);
  }
  routeAdd()
  {
    let path3 = `jabatan_add_forms`
    this.props.history.push(path3);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tabel Jabatan User
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No Jabatan</th>
                    <th>Jabatan</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Direktur Utama</td>
                    <td><Button type="submit" size="sm" color="primary" onClick={this.routeEdit}><i className="fa fa-dot-circle-o"></i>Edit </Button></td>
                    <td><Button type="reset" size="sm" color="danger" onClick={this.routeDelete}><i className="fa fa-ban"></i>Delete </Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Kepala Divisi IT</td>
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

export default JabatanTables;
