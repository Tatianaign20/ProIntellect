import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Head.css";

export const Head = () => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="logo">Pro Intellect</div>
        <nav className="menu">
          <Link
            to="/"
            className={`link ${location.pathname === "/" ? "active-link" : ""}`}
          >
            Главная
          </Link>
          <Link
            to="/examples"
            className={`link ${ location.pathname === "/examples" ? "active-link" : "" }`}
          >
            Примеры задач
          </Link>
          <Link
            to="/assessment"
            className={`link ${ location.pathname === "/assessment" ? "active-link" : "" }`}
          >
            Оценить проект
          </Link>
        </nav>
      </header>
    </>
  );
};