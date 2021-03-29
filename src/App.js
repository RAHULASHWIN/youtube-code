import "./App.css";
import Youtube from "./components/Youtube.js";
import Editor from "./components/Editor.js";
import { Container, Row, Col } from "reactstrap";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="rahul">
    <Navbar />
      <Container>
      <br />
        <Row>
        {/* This is for the youtube search engine. */}
       
          <Col>
            <Youtube />
          </Col>
       
          {/* This is for the connection of editor in the sidebar. */ }
        
          <Col>
            <Editor />
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default App;
