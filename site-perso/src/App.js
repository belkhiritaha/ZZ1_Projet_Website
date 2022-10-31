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

        <h1 style={{textAlign: "center"}}>~tabelkhiri</h1>

        <div className="whoami">
            <Col>
                <Col>
                    <h2>$ whoami</h2>
                    <p>Hi, I'm <b>Abdulrahman</b> and I'm a <b>Software Engineer</b> based in <b>San Francisco Bay Area</b>. I'm currently working at <b>Google</b> as a <b>Software Engineer</b>. I'm also a <b>Computer Science</b> graduate from <b>San Jose State University</b>.</p>
                </Col>

                <Col>
                    <h2>$ find / -name "resume" 2>/dev/null</h2>
                    <p>I'm currently living in <b>San Francisco Bay Area</b>. I'm originally from <b>San Jose, CA</b>.</p>
                </Col>

                <Col>
                    <h2>$ whatami</h2>
                    <p>I'm a <b>Software Engineer</b> with a passion for <b>Web Development</b>. I'm also a <b>Computer Science</b> graduate from <b>San Jose State University</b>.</p>
                </Col>
            </Col>
        </div>  
            
        <div className="App">






            <CardGroup>
                <Row className="g-4" style={{margin: "auto"}}>
                    <Col>
                        <MyCard></MyCard>
                    </Col>
                    <Col>
                        <MyCard></MyCard>
                    </Col>
                </Row>
                <Row className="g-4" style={{margin: "auto"}}>
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
