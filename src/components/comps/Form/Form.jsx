import React from "react";
import './Form.css'

export const Form = () => {

    return (
      <>
            <div className={"form_container"}>
            <div className={"form"}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe 
          src="https://forms.yandex.ru/u/67c8743beb6146a3bfa59742/?iframe=1" 
          frameborder="0" 
          name="ya-form-67c8743beb6146a3bfa59742" 
          width="700" 
          height="1900" className={"ya-form-iframe"}>
        </iframe>
      </div>
      </div>
      </>
    )
  }