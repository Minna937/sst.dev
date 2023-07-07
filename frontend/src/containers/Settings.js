import React, { useState } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import config from "../config";

export default function Settings() {
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details,
        });
    }

    return (
        !isAuthenticating && (
          <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
              <LinkContainer to="/">
                <Navbar.Brand className="fw-bold text-muted">Scratch</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav activeKey={window.location.pathname}>
                  {isAuthenticated ? (
                    <>
                      <LinkContainer to="/settings">
                        <Nav.Link>Settings</Nav.Link>
                      </LinkContainer>
                      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </>
                  ) : (
                    <>
                      <LinkContainer to="/signup">
                        <Nav.Link>Signup</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
              <Routes />
            </AppContext.Provider>
          </div>
        )
      );
}