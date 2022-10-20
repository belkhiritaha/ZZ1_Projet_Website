import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';

function MyNavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ~tabelkhiri
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="fact-checker">Fact Checker</Nav.Link>
                        <Nav.Link href="imposter">LoL Imposters</Nav.Link>
                        <Nav.Link href="raycasting">SDL2 Raycasting</Nav.Link>
                        <Nav.Link href="ZZ1">ZZ1 Project</Nav.Link>
                        <Nav.Link href="instagram">Instagram Bot</Nav.Link>
                        <Nav.Link href="titok">TikTok Bot</Nav.Link>
                        <Nav.Link href="cv">CV</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavBar;