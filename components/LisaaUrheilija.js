import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import UrheilijaContext from "../context/UrheilijaContext";

const LisaaUrheilija = () => {
  const navigate = useNavigate();
  const { setUrheilijatieto } = useContext(UrheilijaContext);

  const [nimi, setNimi] = useState("");
  const [syntymaVuosi, setSyntymavuosi] = useState(0);
  const [paino, setPaino] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uusiUrheilija = {
      nimi,
      syntymaVuosi: Number(syntymaVuosi),
      paino: Number(paino),
      laji,
      saavutukset,
    };

    try {
      await setUrheilijatieto(uusiUrheilija);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>Lisää Urheilija</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nimi">
              <Form.Label>Nimi</Form.Label>
              <Form.Control
                type="text"
                value={nimi}
                onChange={(e) => setNimi(e.target.value)}
                placeholder="Syötä nimi"
                isInvalid={!nimi}
              />
              <Form.Control.Feedback type="invalid">
                Täytä nimi
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="syntymaVuosi" className="mt-3">
              <Form.Label>Syntymävuosi</Form.Label>
              <Form.Control
                type="number"
                value={syntymaVuosi}
                onChange={(e) => setSyntymavuosi(e.target.value)}
                placeholder="Syötä syntymävuosi"
                isInvalid={!syntymaVuosi}
              />
              <Form.Control.Feedback type="invalid">
                Täytä syntymävuosi
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="paino" className="mt-3">
              <Form.Label>Paino</Form.Label>
              <Form.Control
                type="number"
                value={paino}
                onChange={(e) => setPaino(e.target.value)}
                placeholder="Syötä paino"
                isInvalid={!paino}
              />
              <Form.Control.Feedback type="invalid">
                Täytä paino
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="laji" className="mt-3">
              <Form.Label>Laji</Form.Label>
              <Form.Control
                type="text"
                value={laji}
                onChange={(e) => setLaji(e.target.value)}
                placeholder="Syötä laji"
                isInvalid={!laji}
              />
              <Form.Control.Feedback type="invalid">
                Täytä laji
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="saavutukset" className="mt-3">
              <Form.Label>Saavutukset</Form.Label>
              <Form.Control
                type="text"
                value={saavutukset}
                onChange={(e) => setSaavutukset(e.target.value)}
                placeholder="Syötä saavutukset"
                isInvalid={!saavutukset}
              />
              <Form.Control.Feedback type="invalid">
                Täytä saavutukset
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Tallenna
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LisaaUrheilija;
