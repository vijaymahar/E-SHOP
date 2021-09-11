import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShirtsPage from "./Components/shirts/ShirtsPage";
import ShoePage from "./Components/shoes/ShoePage";
import Hoodies from "./Components/hoodies/Hoodies";
import Watches from "./Components/watches/Watches";
import Combos from "./Components/combos/Combos";
const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="g-0">
        <Row className="g-0 p-0 m-0">
          <Col className="g-0 p-0 m-0">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/shirts" component={ShirtsPage} />
              <Route path="/shoes" component={ShoePage} />
              <Route path="/hoodies" component={Hoodies} />
              <Route path="/watches" component={Watches} />
              <Route path="/combos" component={Combos} />
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
