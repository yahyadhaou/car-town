

// const Register = () => {
//     return (
//         <div>
//             register
//         </div>
//     );
// }

// export default Register;




import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from "axios";
import "../index.css";


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    function validateForm() {
        return name.length > 0 && email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            const user = await axios.post("http://localhost:4000/api/users/register", {
                name,
                email,
                password,
            });
                alert("Account has been created")
                navigate("/login");
          
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    return (
        <div className="register">
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h4 className="fw-bold mb-2 text-uppercase ">join us</h4>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label >
                                                    name
                                                </Form.Label>
                                                <Form.Control
                                                    type="name"
                                                    value={name} 
                                                    placeholder="Enter name"
                                                   onChange={(e) => setName(e.target.value)}
                                                    />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >
                                                    Email address
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >

                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button
                                                    variant="danger "
                                                    type="submit"
                                                    disabled={!validateForm()}
                                                >
                                                    Join US NOW
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p >
                                                Don't have an account?{" "}
                                                <Link to="/login" className="text-danger  fw-bold">
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
