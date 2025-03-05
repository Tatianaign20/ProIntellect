import React from "react";
import './Foot.css'

export const Foot = () => {

    return (
      <>
      <footer className={"footer"}>
      <div className={"footer_content"}>
      {/* <Link to='tel:+99995555555' className={"phone"}> */}
        Тел. +7 (999) 999-99-99
      {/* </Link> */}
      <div className={"footer_content_copyright"}>
        <div className={"copyright"}>
          <span className={"copyright_c"}>C</span>
        </div>
        <span className={"year"}>2024 Все права защищены</span>
      </div>
    </div>
      </footer>
      </>
    )
  }
