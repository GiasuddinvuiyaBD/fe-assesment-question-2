import { Navbar, Nav, Container} from "react-bootstrap";
let style = {
    "width" : '150px',
}
const Navigation = () => 
{
    return(
        <>
        <Navbar bg="light" data-bs-theme="dark" >
          <Container>
            <Navbar.Brand >
                <img style={style} src="public/logo.png" alt="img is not found" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
}
export default Navigation