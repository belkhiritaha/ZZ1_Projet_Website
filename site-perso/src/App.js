import logo from './logo.svg';
import './App.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import MyNavBar from './navbar.js';
import CardGroup from 'react-bootstrap/CardGroup';
import MyCard from './card';

function App() {
    return (
        <>
        <MyNavBar></MyNavBar>

        <div className="App">
            <CardGroup>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <MyCard></MyCard>
                    </Col>
                    <Col>
                        <MyCard></MyCard>
                    </Col>
                    <Col>
                        <MyCard></MyCard>
                    </Col>
                    <Col>
                        <MyCard></MyCard>
                    </Col>
                </Row>
            </CardGroup>
        </div>
    </>
    
  );
}

export default App;
