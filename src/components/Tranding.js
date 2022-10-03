import { Col, Container, Row, Card, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Tranding = () => {
  return (
    <Container>
      <br />
      <h1 className="text-white">TRENDING MOVIES</h1>
      <br />
      <Row>
        <Col md={4} className="movieWrapper" id="tranding">
          <Card className="bg-dark movieImages ">
            <Image
              src={duneImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
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
              src={everythingImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Everything</Card.Title>
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
              src={infiniteImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Infinite</Card.Title>
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
              src={jokerImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Joker</Card.Title>
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
              src={lightyearImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Lightyear</Card.Title>
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
              src={morbiusImage}
              alt="Card image"
              className="trendingImages"
            />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Morbius</Card.Title>
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

export default Tranding;
