import { Navbar, Nav, Container} from "react-bootstrap";
let style = {
    "width" : '150px',
}
let navLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png";

const Navigation = () => 
{
    return(
        <>
        <Navbar bg="light" data-bs-theme="dark" >
          <Container>
            <Navbar.Brand >
                <img style={style} src={navLogo} alt="img is not found" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
}
export default Navigation