import React from "react";
import './Main.css';
import { Head } from "../../views/global/Head/Head";
import { Foot } from "../../views/global/Foot/Foot";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Head />
      <div className="main">
        <div className="main_content">
          <p className="main_content_text">
            Искусственный интеллект (ИИ) задействован в{" "}
            <span className="main_content_text_color">98%</span> сфер жизни
            человечества, реализованных проектов — только{" "}
            <span className="main_content_text_color">1%</span>!
          </p>
        </div>
        <div className="main_block_img">
          <div>
            <h2 className="block-header">Преимущества ИИ</h2>
            <ul className="main_list main_list_img_block">
              <li>Решает задачи, которые не могли решить раньше</li>
              <li>Поднимает престиж компании</li>
              <li>Повышает конкурентоспособность</li>
              <li>Освобождает время</li>
              <li>Убирает человеческий фактор</li>
              <li>Повышает точность и скорость обработки данных</li>
              <li>Увеличивает выручку</li>
              <li>Снижает расходы</li>
            </ul>
          </div>
          <div>
            {/* <img src="./src/assets/int3.jpg" className="main_img" alt="ИИ изображение" /> */}
            <img src="https://magnitoterapiya.ru/wp-content/uploads/2020/10/9.jpg" className="main_img" alt="ИИ изображение" />
          </div>
        </div>
        <div className="main_block_three_blocks">
          <h2 className="block-header">Примеры проектов c ИИ</h2>
          <ul className="main_list_block">
            <li className="main_list_item dark_blue">Распознавание иностранных паспортов</li>
            <li className="main_list_item blue">Распознавание блюд</li>
            <li className="main_list_item light_blue">Оценка стоимости квартир</li>
          </ul>
          <p>Сроки реализации проекта зависят от целей и задач проекта.</p>
          <Link to="/examples" className="main_content_link">
            Примеры постановки задач
          </Link>
        </div>
        <div className="main_block_two_blocks">
          <div className="main_block-container">
            <h2 className="block-header">Порядок работы с заказчиком</h2>
            <ul className="main_list">
              <li>Обследование. Определение цели, задач, бюджета и срока проекта</li>
              <li>Пилотник</li>
              <li>Переоценка бюджета и сроков</li>
              <li>Подготовка документов</li>
              <li>Реализация</li>
              <li>Тестирование</li>
              <li>Поддержка</li>
            </ul>
          </div>
          <div className="main_block-container_work">
            <div className="main_block-container">
              <h2 className="block-header">Состав работ</h2>
              <ul className="main_list">
                <li>Разметка базы</li>
                <li>Создание нейронной сети</li>
                <li>Интеграция в production</li>
                <li>Интерфейс</li>
              </ul>
            </div>
            <Link to="/assessment" className="main_button_link">
              <button className="main_button">ОЦЕНИТЬ ПРОЕКТ</button>
            </Link>
          </div>
        </div>
        <div className="main_content_block-container main_contacts">
          <h2 className="block-header block-header_contacts">Контакты</h2>
          {/* заменить your@email.com на нужную почту */}
          <p>your@email.com</p>
          <a href="mailto:your@email.com?subject=Contact%20from%20Website&body=Hello,%0D%0AI'd%20like%20to%20contact%20you.%0D%0ABest%20regards," className="main_content_link">
            Написать
          </a>
        </div>
      </div>
      <Foot />
    </>
  );
};