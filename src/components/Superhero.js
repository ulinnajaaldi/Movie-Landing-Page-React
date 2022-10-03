import { Col, Container, Row, Card, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <Container>
      <br />
      <h1 className="text-white">SUPERHERO MOVIES</h1>
      <br />
      <Row>
        <Col md={4} className="movieWrapper" id="superhero">
          <Card className="bg-dark movieImages ">
            <Image
              src={antmanImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">AntMan</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-dark movieImages ">
            <Image
              src={avengerImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Avenger</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-dark movieImages ">
            <Image
              src={batmanImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Batman</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-dark movieImages ">
            <Image
              src={robinhoodImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">RobinHood</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-dark movieImages ">
            <Image
              src={spidermanImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Spiderman</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-dark movieImages ">
            <Image
              src={supermanImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Superman</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Superhero;
