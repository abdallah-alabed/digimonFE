import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

class DigiCard extends Component {
  render() {
    return (
      <div>
        <h1> All The Digimons </h1>
        <Row md={12}>
          {this.props.CardsData.map((e, index) => {
            return (
              <Col>
                <Card style={{ width: "13rem" }} bg="warning" key={index}>
                  <Card.Img variant="top" src={e.img} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>{e.level}</Card.Text>
                    {/* {console.log(index)} */}
                    <Button
                      variant="success"
                      onClick={() => this.props.addFav(e)}
                    >
                      Add To Favourite
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default DigiCard;
