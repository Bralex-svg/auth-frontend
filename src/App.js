import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Dawood Please Register 😆</h1>
        <p>Please sorry for the delay but for now just regsiter for me 😆</p>
          <section id="navigation">
            <a href="/">Home</a>
            {/* <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a> */}
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Router>

   
      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
      </Router>
    </Container>
  );
}

export default App;
