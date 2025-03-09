import React from "react";
import { Form } from "../../comps/Form/Form";
import { Head } from "../../views/global/Head/Head";
import { Foot } from "../../views/global/Foot/Foot";
import './Assessment.css'
import { useEffect } from "react";

export const Assessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
    <div className="assessment_container">
      <Head />
      <div className="assessment">
      <div className={"assessment_description"}>
        <h2 className={"assessment_block-header"}>Оценка проекта</h2>
         <span>В данной  форме, для лучшего контакта с потенциальным заказчиком, лучшего понимания, а так же для предварительной подготовке ко встрече, всю информацию нужно описывать максимально подробно.</span>
       </div> 
      <Form />
      </div>
      <Foot />
      </div>
    </>
  );
};