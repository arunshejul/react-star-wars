import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image, Breadcrumb } from 'react-bootstrap';

class Details extends React.Component {

  didBack = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="mainContainer">
        <Container>
          <Row style={{ marginTop: 10 }}>
            <Col>
              <Breadcrumb style={{ backgroundColor: '#ffffff' }}>
                <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => this.props.history.goBack()}>Result</Breadcrumb.Item>
                <Breadcrumb.Item active>Details - {this.props.location.state.searchTerm}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={styles.paper}>
                <Row>
                  <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div style={{ flexDirection: 'column' }}>
                      <div style={styles.titleRow}>
                        <p style={styles.txtHeading}>{this.props.location.state.item.title}</p>
                      </div>
                      {this.props.location.state.item.data.map((item, index) => (
                        <Card item={item} key={index} onClick={this.didView} />
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const Card = props => (
  <div style={styles.card} onClick={() => props.onClick(props.item)}>
    <Image style={styles.img} src={props.item.img} />
    <div style={styles.txtView}>
      <p style={styles.txtDateTime}>{props.item.date}</p>
      <p style={styles.txtDateTime}>{props.item.time}</p>
    </div>
  </div>
);

const styles = {
  paper: {
    border: '1px solid #d0d1d2',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  txtHeading: { fontSize: 20, fontWeight: 'bold', color: '#525354' },
  card: {
    //marginRight: 20,
    marginBottom: 20,
    flexDirection: 'column',
    display: 'flex',
    border: '1px lightgray solid',
    borderRadius: 2,
    position: 'relative',
    cursor: 'pointer',
  },
  cardTitle: { fontSize: 15, fontWeight: 'bold' },
  view: { display: 'flex', flexDirection: 'column', border: '1px solid #D0D1D2', cursor: 'pointer' },
  img: { height: 140 },
  txtView: {
    height: 30,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    paddingleft: 5,
    paddingRight: 5,
  },
  txtDateTime: {
    lineHeight: '30px',
    margin: 0,
    fontSize: 12,
    color: '#525354',
  },
};
export default Details;
