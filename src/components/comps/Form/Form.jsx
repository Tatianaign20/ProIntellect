import React from "react";
import './Form.css'
import { Input } from "../../comps/Input/Input";

export const Form = () => {

    return (
      <>
      {/* <form className={"form"}>
        <Input />
        <Input />
        <Input />
        <Input />
      </form> */}
            <div className={"form_container"}>
            <div className={"form"}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe 
          src="https://forms.yandex.ru/u/67c8743beb6146a3bfa59742/?iframe=1" 
          frameborder="0" 
          name="ya-form-67c8743beb6146a3bfa59742" 
          width="650" 
          height="1700">
        </iframe>
      </div>
      </div>
      </>
    )
  }