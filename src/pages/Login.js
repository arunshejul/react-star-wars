import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Container, Card, Col, Row, Image } from 'react-bootstrap';
import User_Icon from '../assets/User_Icon.png';
import Password_Icon from '../assets/Password_Icon.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Luke Skywalker',
      password: '19BBY',
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.username === 'Luke Skywalker' && this.state.password === '19BBY') {
      setTimeout(() => {
        this.props.history.push('/search');
      }, 1000);
    } else {
      alert('Invalid username/password');
    }
  };

  render() {
    return (
      <Container style={{ marginTop: 120 }}>
        <Card>
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col sm={6} md={6} lg={6} xl={6}>
                <Row className="justify-content-center" style={styles.gutterSpace}>
                  <InputGroup size="lg">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1" style={styles.inputIcon}>
                        <Image src={User_Icon} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      id="username"
                      type="text"
                      placeholder="Username"
                      autoFocus
                      style={styles.inputBox}
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Row>
                <Row className="justify-content-center" style={styles.gutterSpace}>
                  <InputGroup size="lg">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon2" style={styles.inputIcon}>
                        <Image src={Password_Icon} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      id="password"
                      type="password"
                      style={styles.inputBox}
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Row>
                <Row className="justify-content-center" style={styles.gutterSpace}>
                  <Button
                    block
                    size="lg"
                    variant="primary"
                    disabled={!this.validateForm()}
                    onClick={() => this.handleSubmit()}
                  >
                    Login
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

    );
  }
}

const styles = {
  gutterSpace: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  logo: {
    height: 60,
  },
  inputBox: {
    color: '#000',
    backgroundColor: 'transparent',
  },
  inputIcon: {
    backgroundColor: 'transparent',
  },
  loginView: {
    backgroundColor: '#1f2f51',
  },
};
export default withRouter(Login);
