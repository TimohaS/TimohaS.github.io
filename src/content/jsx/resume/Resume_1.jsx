import React, {useState} from "react";
import Select from "react-select";
import Calendar from "react-calendar";
import '../../css/ui.css';
import '../../css/resume_1.css';
import { Link } from "react-router-dom";
import Creator from "./Creator";


export default function Resume_1() {    
    const [info, setInfo] = useState(
        {
            lastname: "Иванов",
        firstname: "Иван",
        middlename: "Иванович",
        jobTitle: "Программист",
        salary: "40000",
        typeWork: "Полная",
        workDays: "Полный день",
        phoneNumber: "+79999999999",
        email: "ivanivan@mail.ru",
        viber: "on",
        telegram: "on",
        cityName: "Чебоксары",
        birhtDay: "1995-03-17",
        gender: "Мужской",
        education: "Бакалавр",
        jobPosition: "Стажер",
        jobOrganization: "Рога и копыта",
        functions: "Разработка веб-сервисов",
        workPeriodOne: "2023-03",
        workPeriodTwo: "2023-07",
        university: "ЧГУ",
        faculty: "ИВТ",
        specialzation: "Прикладная информатика",
        endUnStudy: "2023",
        formStudy: "Очная",
        course: "Курс повышения квалификации",
        organization: "Наш организатор",
        endCourseStudy: "2022", 
        language: "Английский",
        level: "Уверенное",    
        about: `Честность;
        Ответственность;
        Прилежность и организованность;
        Этичность и лояльность;
        Пунктуальность;
        Гибкость;`,
        professional: `Разработка творческих заданий
        Написание и редактирование текстов
        Графический дизайн`,  
        }
    )

    const typeWork = [
        { value: 'Полная', label: 'Полная' },
        { value: 'Частичная', label: 'Частичная' },
        { value: 'Стажировка', label: 'Стажировка' },
        { value: 'Волонтёрство', label: 'Волонтёрство' }
    ]

    const workDays = [
        { value: 'Полный день', label: 'Полный день' },
        { value: 'Неполный день', label: 'Неполный день' },
        { value: 'Сменный график', label: 'Сменный график' },
        { value: 'Гибкий график', label: 'Гибкий график' }
    ]

    const gender = [
        { value: 'Мужской', label: 'Мужской' },
        { value: 'Женский', label: 'Женский' },       
    ]

    const education = [
        { value: 'Среднее общее', label: 'Среднее общее' },
        { value: 'Среднее специальное', label: 'Среднее специальное' }, 
        { value: 'Среднее общее', label: 'Среднее общее' },
        { value: 'Бакалавр', label: 'Бакалавр' },   
        { value: 'Магистр', label: 'Магистр' },
        { value: 'Кандидат наук', label: 'Кандидат наук' },  
        { value: 'Доктор наук', label: 'Доктор наук' },         
    ]

    const formStudy = [
        { value: 'Очная', label: 'Очная' },
        { value: 'Очно-заочная', label: 'Очно-заочная' }, 
        { value: 'Заочная', label: 'Заочная' },       
    ]

    const level = [
        { value: 'Начинающий', label: 'Начинающий' },
        { value: 'Уверенное', label: 'Уверенное' }, 
        { value: 'Свободное', label: 'Свободное' }, 
        { value: 'В совершенстве', label: 'В совершенстве' },      
    ]

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
    }
    function editSelect(prop, event) {
        setInfo({...info, ...{[prop]: event.value}});
    }
    
    
    return(
        <div className="resume">
            <div className="wrapper"> 
                    <div className="main-info data-item">
                        <div className="user-name row">
                            <div className="label-input">
                                <label htmlFor="lastname">Фамилия</label>   
                                <input type="text"
                                    value={info.lastname}
                                    id="lastname"
                                    name="lastname"
                                    onChange={event => edit('lastname', event)}
                                    placeholder="Введите фамилию" />  
                            </div>              
                            <div className="label-input">
                                <label htmlFor="firstname">Имя</label>
                                <input type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={info.firstname}
                                    onChange={event => edit('firstname', event)} 
                                    placeholder="Введите имя"/> 
                            </div> 
                            <div className="label-input">
                                <label htmlFor="middlename">Отчество</label> 
                                <input type="text" 
                                    id="middlename"
                                    name="middlename"
                                    value={info.middlename}
                                    onChange={event => edit('middlename', event)} 
                                    placeholder="Введите отчество"/>  
                            </div>                                             
                        </div>
                    </div>         
                <p className="h-item">Контактная информация</p>
                        <div className="wanted-info data-item row">
                    <div className="label-input">
                        <label htmlFor="jobTitle">Желаемая должность</label> 
                        <input type="text" 
                            id="jobTitle"
                            name="jobTitle"
                            value={info.jobTitle}
                            onChange={event => edit('jobTitle', event)}
                            placeholder="Какую должность вы хотите?"/>
                    </div> 
                    <div className="label-input">
                        <label htmlFor="salary">Желаемая зарплата</label> 
                        <input type="number" 
                            id="salary"
                            name="salary"
                            value={info.salary}
                            onChange={event => edit('salary', event)}
                            step="500"
                            placeholder="Какую зарплату вы хотите?"/>
                    </div>
                    <div className="label-input">
                        <label htmlFor="typeWork">Тип занятости</label> 
                        <Select options={typeWork} onChange={event => editSelect('typeWork', event)}/>
                    </div>
                    <div className="label-input">
                        <label htmlFor="workDays">График работы</label> 
                        <Select  options={workDays} onChange={event => editSelect('workDays', event)}/>
                    </div>          
                </div>                        
                <p className="h-item">Личная информация</p>
                <div className="contact-info data-item row">
            <div className="label-input">
                <label htmlFor="phoneNumber">Телефон</label> 
                <input type="tel"                     
                    placeholder="Ваш телефонный номер"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={info.phoneNumber}
                    onChange={event => edit('phoneNumber', event)}/>
            </div> 
            <div className="label-input">
                <label htmlFor="email">Электронная почта</label> 
                <input type="text" 
                    id="email"
                    name="email"
                    value={info.email}
                    placeholder="Введите ваш email"
                    onChange={event => edit('email', event)}/>
            </div> 
        </div>
                <p className="h-item">Опыт работы</p>
                <div className="job-info data-item">
        <div className="label-input">
            <label htmlFor="jobPosition">Занимаемая должность</label> 
            <input type="text" 
                id="jobPosition"
                name="jobPosition"
                value={info.jobPosition}
                placeholder="Какую должность вы занимали?"
                onChange={event => edit('jobPosition', event)}/>
        </div> 
        <div className="label-input">
            <label htmlFor="jobOrganization">Название организации</label>
            <input type="text" 
                id="jobOrganization"
                name="jobOrganization"
                value={info.jobOrganization}
                placeholder="Как называлась ваша организация?"
                onChange={event => edit('jobOrganization', event)}/>
        </div> 
        <div className="label-input">
            <label htmlFor="functions">Обязанности</label>
            <input type="text" 
                id="functions"
                name="functions"
                value={info.functions}
                placeholder="Какие были ваши обязанности"
                onChange={event => edit('functions', event)}/>
        </div> 
        <div className="row">              
            <div className="label-input">
                <label htmlFor="workPeriodOne">Период работы От:</label> 
                <input type="month" 
                    id="workPeriodOne"
                    name="workPeriodOne"
                    min="1940-01" 
                    value={info.workPeriodOne}
                    max="2023-12"
                    onChange={event => edit('workPeriodOne', event)}/>
            </div> 
            <div className="label-input">
                <label htmlFor="workPeriodTwo">Период работы До:</label> 
                <input type="month" 
                    id="workPeriodTwo"
                    name="workPeriodTwo"
                    value={info.workPeriodTwo}
                    min="1940-01" 
                    max="2023-12"
                    onChange={event => edit('workPeriodTwo', event)}/>
            </div>             
        </div>  
       
    </div>
                <p className="h-item">Образование</p>
                <div className="education-info data-item">
            <div className="label-input">   
                <label htmlFor="university">Название учебного заведения</label> 
                <input type="text" 
                    id="university"
                    name="university"
                    value={info.university}
                    placeholder="Где вы учились?"
                    onChange={event => edit('university', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="faculty">Факультет</label>
                <input type="text" 
                    id="faculty"
                    name="faculty"
                    value={info.faculty}
                    placeholder="На каком факультете прошли обучение"
                    onChange={event => edit('faculty', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="specialzation">Специальность</label>
                <input type="text" 
                    id="specialzation"
                    name="specialzation"
                    value={info.specialzation}
                    placeholder="Название вашей специальности"
                    onChange={event => edit('specialzation', event)}/>
            </div> 
            <div className="row">
                <div className="label-input">
                    <label htmlFor="endStudy">Год окончания</label> 
                    <input type="number" 
                        id="endStudy"
                        name="endStudy"
                        min="1940" 
                        max="2023"
                        value={info.endUnStudy}
                        step="1"
                        placeholder="В каком году?"
                        onChange={event => edit('endUnStudy', event)}/>
                </div>                
                <div className="label-input">
                    <label htmlFor="formStudy">Форма обучения</label> 
                    <Select options={formStudy} onChange={event => editSelect('formStudy', event)}/>
                </div>
            </div>                
        </div>
                <p className="h-item">Курсы и тренинги</p>
                <div className="course-info data-item">
            <div className="label-input">   
                <label htmlFor="course">Название курса или тренинга</label> 
                <input type="text" 
                    id="course"
                    name="course"
                    value={info.course}
                    placeholder="Как назывался курс или тренинг?"
                    onChange={event => edit('course', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="organization">Организация курса или тренинга</label>    
                <input type="text" 
                    id="organization"
                    name="organization"
                    value={info.organization}
                    placeholder="Где вы прошли курс или тренинг?"
                    onChange={event => edit('organization', event)}/>
            </div> 
            <div className="row">
            <div className="label-input">
                    <label htmlFor="endStudy">Год окончания</label> 
                    <input type="number" 
                        id="endStudy"
                        name="endStudy"
                        value={info.endCourseStudy}
                        min="1940" 
                        max="2023"
                        step="1"
                        placeholder="В каком году?"
                        onChange={event => edit('endCourseStudy', event)}
                        />
                </div>             
            </div>                
        </div> 
                <p className="h-item">Иностранные языки</p>
                <div className="language-info data-item">
            <div className="label-input">   
                <label htmlFor="language">Иностранный язык</label> 
                <input type="text" 
                        id="language"
                        name="language"
                        value={info.language}
                        placeholder="Введите иностранный язык"
                        onChange={event => edit('language', event)}/>
            </div>
            <div className="label-input">
                <div className="level">
                    <label htmlFor="level">Уровень владения</label> 
                    <Select options={level} onChange={event => editSelect('level', event)}/>
                </div>
            </div>      
        </div> 
                <p className="h-item">О себе</p>
                <div className="other-info data-item">
            <div className="label-input">   
                <label htmlFor="about">Личные качества</label>
                <textarea type="text" 
                    id="about"
                    name="about"
                    value={info.about}
                    placeholder="Напишите пару предложений о себе"
                    onChange={event => edit('about', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="professional">Профеcсиональные качества</label>
                <textarea type="text" 
                    id="professional"
                    name="professional"
                    value={info.professional}
                    placeholder="Напишите о своих проффесиональных качествах"
                    onChange={event => edit('professional', event) }/>
            </div>                                               
        </div>            
               
            </div>            
            <Creator data={info}/>
        </div>
    );
}

