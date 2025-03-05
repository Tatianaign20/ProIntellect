import React from "react";
import './Head.css'
import { Link } from "react-router-dom";

export const Head = () => {

    return (
      <>
      <header className={"header"}>
        <div className={"logo"}>Pro Intellect</div>
        <nav className={"menu"}>
          <Link to="/" className={"link"}>Главная</Link>
          <Link  to="/examples" className={"link"}>Примеры задач</Link>
          <Link  to="/assessment" className={"link"}> Оценить проект</Link>
        </nav>
      </header>
      </>
    )
  }
