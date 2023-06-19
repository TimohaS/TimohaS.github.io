import React from "react";
import '../css/ui.css';
import '../css/main.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";

export default function Main() {
    return(
        <div className="main wrapper">
            <div className="p-free">
                <b>3 шага</b> для создания 
                вашего резюме <b>бесплатно</b>
            </div>            
            <div className="slider-comp">                
                <ul className="slider-numbers">
                    <li><div>1</div></li>
                    <li><div>2</div></li>
                    <li><div>3</div></li>
                </ul>                
                <div className="slider-wrap">
                    <div>
                        <div>
                            <p>Внесите данные</p>
                            <p>Введите свои данные в определённые поля,  алгоритм вам поможет заполнить без ошибок</p>
                        </div>
                        <div className="butonns">
                            <button className="knopka"><svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.88159 22.7201L17.9999 8.27342L32.1183 22.7201L35.9166 18.8334L17.9999 0.500091L0.083252 18.8334L3.88159 22.7201Z" fill="white" fill-opacity="0.87"/>
</svg>
</button>
                            <button className="knopka"><svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.88159 22.7201L17.9999 8.27342L32.1183 22.7201L35.9166 18.8334L17.9999 0.500091L0.083252 18.8334L3.88159 22.7201Z" fill="white" fill-opacity="0.87"/>
</svg>
</button>
                        </div>                        
                    </div>
                    <div>                        
                        <img src={require("../img/kartinka.png")} alt="" width={445} height={356} />
                        <Link to="/resume" className="btn stroke-btn"> Создать резюме </Link>
                    </div>
                </div>
            </div>
            <div>
                <p className="primer">Примеры шаблонов</p>
                <ul className="fotos">               
                    <li><img src={require("../img/image 6.png")} alt="" width={260} height={370} /></li>
                    <li><img src={require("../img/image 6.png")} alt="" width={320} height={450} /></li>
                    <li><img src={require("../img/image 6.png")} alt="" width={260} height={370} /></li>
                </ul>
            </div>
            <div>
                <div className="project">
                    <p>О проекте</p>
                    <p>Данный проект является частью открытой разработки 
                        Разработчики не имеют коммерческих целей связанных с данным проектом
                        <pre></pre>Вы можете поддержать нашу разработку:
                    </p>
                    <div>
                        <ul>
                            <li>созданием, добавлением и адаптацией шаблонов</li>
                            <li>оптимизацией кода</li>
                            <li>расширением функционала проекта</li>
                            <li>репостами в соцсетях</li>
                            <li>или расскажите об этом проекте своему другу</li>
                        </ul>
                    </div>
                </div>
                <div className="project-btn">
                    <button className="btn-all">Ссылка на гитлаб</button>                    
                </div>
            </div>            
        </div>
    );
};