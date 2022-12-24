import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React, { useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { setUserDetails } = useContext(LoginContext);
  const navigate = useNavigate();
  const HandleLogin = async (event) => {
    event?.preventDefault();
    const url = `http://localhost:/finalapi/api/user/LoginStudentLinq?username=${user}&password=${password}`;
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    });
    if (response.ok) {
      let json = await response.json();
      setUserDetails(json);
      if (json.role_id === 1) {
        navigate("/CommitteeDashBoard");
      } else if (json.role_id === 2) {
        navigate("TeacherDashboard");
      } else if (json.role_id === 3) {
        navigate("Selection");
      } else if (json.role_id === 4) {
        navigate("StudentDash");
      } else {
        alert("Please check your login information.");
      }
    }
  };
  return (
    <div style={{ backgroundColor: "#e6e6e3" }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 "></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h5
                    className="fw-bold mb-4 text-uppercase "
                    style={{ color: "#198754", textAlign: "center" }}
                  >
                    BIIT Project Progress Monitoring System
                  </h5>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          value={user}
                          onChange={(e) => setUser(e.target.value)}
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
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="success"
                          onClick={() => {
                            HandleLogin();
                          }}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
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
