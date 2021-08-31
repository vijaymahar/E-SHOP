import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShirtsPage from "./Components/shirts/ShirtsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="g-0 p-0 m-0">
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
