import React from 'react';
import FourOhFour from '../assets/FourOhFour.png';
import { Container, Col, Row, Image } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <Row className="justify-content-center align-items-center">
            <Image src={FourOhFour} fluid />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
