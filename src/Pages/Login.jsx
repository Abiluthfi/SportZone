import React, { useState } from "react";
import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";
import "../Style/LoginStyle.css";
import { isEdge } from "react-device-detect";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Login() {
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Tambahkan ini

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container y-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="login-card overflow-hidden p-4 border-0 shadow-lg rounded-4">
              <Card.Body className="p-sm-2">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="login-title">
                    <Card.Title className="welcome-title">
                      <b>Selamat Datang di SPORT ZONE</b>
                    </Card.Title>
                    <Card.Text className="signin-text">Silahkan Sign In</Card.Text>
                  </div>

                  <Form.Group className="mt-4 input">
                    <Form.Label>
                      Email<span className="text-danger">*</span>
                    </Form.Label>
                    <div className="form-input position-relative ">
                      <Form.Control type="text" className="form-control bg-light border-light password-input" placeholder="Masukkan email" id="email" name="email" autoComplete="email" required />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3 input">
                    <Form.Label>
                      Password<span className="text-danger">*</span>
                    </Form.Label>
                    <div className="form-input position-relative auth-pass-inputgroup mb-3">
                      <Form.Control
                        className="form-control bg-light border-light mb-1 password-input"
                        placeholder="Masukkan password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        required
                      />
                      {!isEdge && (
                        <div className="password-toggle-icon" onClick={handleTogglePassword}>
                          {showPassword ? "🙈" : "👀"}
                        </div>
                      )}
                    </div>
                  </Form.Group>

                  <div className="signin-btn">
                    <Link to="/dashboard-admin" className="nav-link">
                      <Button className="btn-signin w-100 rounded-pill mt-3" type="submit" variant="primary">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                  <div className="Lsignup-btn text-decoration-underline mt-2 text-dark d-flex justify-content-center align-items-center">
                    <Link to="/register" className="btn-Lsignup text-dark">
                      Sign Up
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
