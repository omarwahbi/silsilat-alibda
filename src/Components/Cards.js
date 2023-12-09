import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Cards() {
  return (
    <CardGroup className="m-auto">
      <Card className="me-3">
        <Card.Body>
          <Card.Title>Beverage Production:</Card.Title>
          <Card.Text>
            We specialize in producing a diverse range of beverages such as
            natural juices, multi-flavored carbonated drinks, and iced coffee.
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card className="me-3">
        <Card.Body>
          <Card.Title>Diversity and Quality:</Card.Title>
          <Card.Text>
            We strive to provide a wide array of fresh and delicious beverages
            that maintain high quality and satisfy our customers' expectations.
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card className="me-3">
        <Card.Body>
          <Card.Title>Innovation and Development:</Card.Title>
          <Card.Text>
            We are always racing against time to introduce new and innovative
            products that meet the increasing demand and keep up with
            developments in the beverage industry
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;
