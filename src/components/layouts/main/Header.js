import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// styles
import "styles/layout/header.scss";

const Header = () => {
  return (
    <div className="header bg-danger py-4 text-white">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="">
          <h1>TO-DO LIST</h1>
        </div>
        <div>
          <Link className="text-white " to={"/"}>
            HOME
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
