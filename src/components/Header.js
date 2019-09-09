import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Navbar, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Header = props => (
  <Container fluid>
    <Row>
      <Col>
        <Navbar fixed="top" style={styles.headerStyle}>
          <Navbar.Brand>
            <Link to="/" href="/">
              <img style={styles.logo} src={require('./../assets/Logo.png')} alt="logo" />
            </Link>
          </Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

const styles = {
  headerStyle: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#101E38',
    justifyContent: 'space-between',
  },
  logo: {
    height: 60,
  },
};

export default withRouter(Header);
