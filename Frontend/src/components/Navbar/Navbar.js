import React, { useContext } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { ThemeContext } from "../../context/Context";
export default function MainNavbar() {
  const context = useContext(ThemeContext);
  return (
    <>
      <div className="custom-navbar">
        <div className="custom-nav-item">
          <Form.Check
            type="switch"
            id="custom-switch"
            label=""
            onChange={(e) => {
              context.toggleTheme(e.target.checked);
            }}
          />
        </div>

        <div className="nav-item">
          <span>
            <i
              className={
                context.theme === "white"
                  ? `fa fa-lightbulb-o `
                  : `fa fa-moon-o`
              }
              aria-hidden="true"
            ></i>
          </span>
        </div>
      </div>
    </>
  );
}
