import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import EdirModal from "./EdirModal";

class Favourites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favData: [],
      showEdit: false,
      name: "",
      level: "",
      id: "",
    };
  }

  handleShowEdit = (e) => {
    this.setState({
      showEdit: true,
    });
  };
  handleCloseEdit = (e) => {
    this.setState({
      showEdit: false,
    });
  };

  componentDidMount = async () => {
    const digimons = await axios.get(
      `http://${process.env.REACT_APP_BACKEND_URL}/digimon`
    );
    this.setState({
      favData: digimons.data,
    });
  };

  render() {
    return (
      <div>
        <h1> My Favourite Digimons </h1>
        <Row md={12}>
          {this.state.favData.map((e, index) => {
            return (
              <>
                <Col>
                  <Card style={{ width: "12rem" }} bg="warning" key={index}>
                    <Card.Img variant="top" src={e.image} />
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>{e.level}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          this.setState({
                            name: e.name,
                            level: e.level,
                            id: e._id,
                          });
                          this.handleShowEdit();
                        }}
                      >
                        Edit Digimon
                      </Button>
                      {""}
                      <Button
                        variant="danger"
                        onClick={() => {
                          axios.delete(
                            `http://${process.env.REACT_APP_BACKEND_URL}/deleteDigimon/${e._id}`
                          );
                        }}
                      >
                        Delete Digimon
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <></>
              </>
            );
          })}
        </Row>
        {this.state.showEdit && (
          <EdirModal
            CardID={this.state.id}
            CardName={this.state.name}
            CardLevel={this.state.level}
            showEdit={this.state.showEdit}
            handleCloseEdit={this.handleCloseEdit}
          />
        )}
      </div>
    );
  }
}

export default Favourites;
