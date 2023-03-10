import TodoMain from "./components/TodoMain";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <h1 className="my-5">React Todo-List</h1>
            <TodoMain />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
