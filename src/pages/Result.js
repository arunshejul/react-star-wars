import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
const data = [];
class PhotoSequence extends React.Component {

  didView = item => {
    this.props.history.push({
      pathname: `/result/${this.props.location.state.searchTerm}/details`,
      state: { item, searchTerm: this.props.location.state.searchTerm },
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <Container>
          <Row style={{ marginTop: 100 }}>
            <Col>
              <Breadcrumb style={{ backgroundColor: '#ffffff' }}>
                <Breadcrumb.Item onClick={() => this.props.history.goBack()}>Search</Breadcrumb.Item>
                <Breadcrumb.Item active>{this.props.location.state.searchTerm}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={styles.paper}>
                <div style={styles.labelRow}>
                  <LabelValue label="Customer Name" value="John" />
                  <LabelValue label="Origin VPC" value="Honolulu" />
                  <LabelValue label="Destination VPC" value="San Diego" />
                </div>
                <div style={styles.divider} />

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {data.map((item, index) => (
                    <Card title={item.title} key={index} img={item.img} item={item} onClick={this.didView} />
                  ))}
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const LabelValue = props => (
  <div style={styles.labelColumn}>
    <p style={styles.txtLabel}>{props.label}</p>
    <p style={styles.txtValue}>{props.value}</p>
  </div>
);

const Card = props => (
  <div style={styles.card}>
    <p style={styles.cardTitle}>{props.title}</p>
    <div style={styles.view} onClick={() => props.onClick(props.item)}>
      <img style={styles.img} src={props.img} alt="pic" />
      <p style={styles.txtView}>View</p>
    </div>
  </div>
);

const styles = {
  txtTitle: { marginTop: 10, fontSize: 16, fontWeight: 'bold', alignItems: 'center' },
  paper: { border: '1px solid #d0d1d2', backgroundColor: '#fff', padding: 20 },
  headerView: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    border: '1px solid #d0d1d2',
  },
  labelRow: { marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row' },
  labelColumn: { display: 'flex', flexDirection: 'column', marginRight: 50 },
  txtLabel: { color: 'gray', fontSize: 15, margin: 0 },
  txtValue: { color: '#525354', fontSize: 15, margin: 0 },
  divider: { height: 1, backgroundColor: '#D0D1D2' },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  txtHeading: { fontSize: 20, fontWeight: 'bold', color: '#525354' },
  card: { marginRight: 25, marginTop: 20 },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#525354' },
  view: { display: 'flex', flexDirection: 'column', border: '1px solid #D0D1D2', cursor: 'pointer' },
  img: { height: 130, width: 180 },
  txtView: { margin: 0, height: 30, textAlign: 'center', lineHeight: '30px', color: '#525354' },
};
export default PhotoSequence;
