import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useTranslation } from "react-i18next";
function Cards() {
  const { t } = useTranslation();
  return (
    <CardGroup className="m-auto">
      <Card className="me-3 mobile-card">
        <Card.Body>
          <Card.Title>{t("beverage_production_card")}</Card.Title>
          <Card.Text>{t("beverage_production_desc")}</Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card className="me-3 mobile-card">
        <Card.Body>
          <Card.Title>{t("diversity_quality_card")}</Card.Title>
          <Card.Text>{t("diversity_quality_desc")}</Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card className="me-3 mobile-card">
        <Card.Body>
          <Card.Title> {t("innovation_development")}</Card.Title>
          <Card.Text>{t("innovation_development_desc")}</Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;
