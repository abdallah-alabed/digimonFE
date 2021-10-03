import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

class EdirModal extends Component {
  constructor(props) {
    super(props);

    this.state=({
      nameModal: "",
      levelModal: "",
    });
  }

  handleName = (e) => {
      this.setState({
        nameModal:e.target.value
      })
    //   console.log(this.state.nameModal)
  };
  handleLevel = (e) => {
    this.setState({
        levelModal:e.target.value
      })
    //   console.log(this.state.levelModal)
  };

  updateDigimon = async (event) => {
    event.preventDefault();

    const DigimondData = {
      name: this.state.nameModal,
      level: this.state.levelModal,
    };

    await axios.put(
      `http://${process.env.REACT_APP_BACKEND_URL}/updateDigimon/${this.props.CardID}`,
      DigimondData
    );
    this.props.handleCloseEdit()
    document.location.reload(true)
  };

  render() {
    {
    //   console.log(this.props.CardID);
    }

    return (
      <div>
        <Modal show={this.props.showEdit} onHide={this.props.handleCloseEdit}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Edit Digimon</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={this.updateDigimon}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Digimon Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.CardName}
                    onChange={this.handleName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Digimon Level</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.CardLevel}
                    onChange={this.handleLevel}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                >
                  Submit Edit
                </Button>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default EdirModal;
