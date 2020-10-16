import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {register} from "../../../Function/AdminFunction";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username_admin: '',
      email_admin:'',
      password_admin: '',
      nama_admin: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
//    onChange
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
//    onSubmit
  onSubmit(e){
    e.preventDefault()

    const newAdmin = {
      // id_admin: this.state.id_admin({value: e.value + 1}),
      username_admin: this.state.username_admin,
      email_admin: this.state.email_admin,
      password_admin: this.state.password_admin,
      nama_admin: this.state.nama_admin
    }
    register(newAdmin).then(res => {
      this.props.history.push(`/login`)
    })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form noValidate onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                             placeholder="Username"
                             autoComplete="username"
                             name="username_admin"
                             value={this.state.username_admin}
                             onChange={this.onChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                             placeholder="Email"
                             autoComplete="email"
                             name="email_admin"
                             value={this.state.email_admin}
                             onChange={this.onChange}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"
                             placeholder="Password"
                             autoComplete="new-password"
                             name="password_admin"
                             value={this.state.password_admin}
                             onChange={this.onChange}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text"
                             placeholder="Admin"
                             autoComplete="Admin"
                             name="nama_admin"
                             value={this.state.nama_admin}
                             onChange={this.onChange}/>
                    </InputGroup>

                    <Button type="submit" color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
