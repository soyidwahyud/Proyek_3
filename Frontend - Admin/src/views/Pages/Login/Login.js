import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {login} from "../../../Function/AdminFunction";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username_admin: '',
      password_admin: '',
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

    const admin = {
      username_admin: this.state.username_admin,
      password_admin: this.state.password_admin
    }

    // login(admin).then(res => {
    //         this.props.history.push(`/profile`)
    // })
    login(admin).then(res => {
      if (!res.error) {
        this.props.history.push(`/`)
      }
    })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>

                    <Form noValidate onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                               placeholder="Username"
                               name="username_admin"
                               placeholder="Enter Username"
                               value={this.state.username_admin}
                               onChange={this.onChange}
                               autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                               placeholder="Password"
                               name="password_admin"
                               placeholder="Enter Password"
                               value={this.state.password_admin}
                               onChange={this.onChange}
                               autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                    </Form>

                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Sign Up Admin Click here..</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
