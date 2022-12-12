import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavB = ({ props }) => {
  const navigate = useNavigate();

  const handelLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="light" variant={"light"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav
          className="me-auto my-2 my-lg-0 flex-row d-flex justify-content-between w-100"
          style={{ maxHeight: "150px" }}
          navbarScroll
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            className="ima"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/318188190_584284990200398_3120553344828726772_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=r1o70u4eQHAAX-zx-M7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQfCgbEXLQM8ZuPZt2Xtj_pRJSMtZskQPuvc71sbWowAg&oe=63BA8B2E"
            alt=""
          />
          <div className="w-25 d-flex justify-content-evenly text-uppercase  ">
            <Link to="/" className="text-decoration-none text-black ">
              <span>Home</span>
            </Link>
            <Link to="/posts" className="text-decoration-none text-black">
              <span>Post</span>
            </Link>
            <Link to="/myadds" className="text-decoration-none text-black">
              <span>Profile</span>
            </Link>
            <Link to="/login" className="text-decoration-none text-black">
              <span onClick={handelLogOut}>logout</span>
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavB;
