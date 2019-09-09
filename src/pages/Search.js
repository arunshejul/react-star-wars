import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Container, Col, Row, } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  validateForm() {
    return this.state.searchTerm.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.history.push({
      pathname: `/result/${this.state.searchTerm}`,
      state: { searchTerm: this.state.searchTerm },
    });
  };

  render() {
    return (
      <Container fluid>
        <Row
          className="justify-content-center align-items-center"
          style={{ backgroundColor: '#f5f5f5', height: '100vh' }}
        >
          <Col style={styles.searchView} xs={10} sm={8} md={8} lg={6} xl={6}>
            <Row style={styles.gutterSpace}>
              <label style={styles.labelStyle}>Enter searchTerm</label>
            </Row>
            <Row className="justify-content-center" style={styles.gutterSpace}>
              <InputGroup size="lg">
                <FormControl
                  autoFocus
                  id="searchTerm"
                  type="text"
                  placeholder="Enter searchTerm #"
                  style={styles.inputBox}
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </Row>
            <Row className="justify-content-center" style={styles.gutterSpace}>
              <Button block size="lg" variant="primary" disabled={!this.validateForm()} onClick={this.handleSubmit}>
                Search
                  </Button>
            </Row>
          </Col>
        </Row>
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
  inputBox: {
    color: '#000',
    backgroundColor: 'transparent',
  },
  inputIcon: {
    backgroundColor: 'transparent',
  },
  searchView: {
    backgroundColor: '#FFFFFF',
  },
  labelStyle: {
    fontSize: 20,
    marginTop: 20,
    color: '#000',
    textAlign: 'left'
  },
};
export default withRouter(Search);
