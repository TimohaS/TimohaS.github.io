import React from 'react';
import { Page, PDFDownloadLink, Image, Text, View, Document, StyleSheet, PDFViewer, Font, Line, Svg } from '@react-pdf/renderer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import Roboto from "../../fonts/Roboto-Regular.ttf";
import RobotoBold from "../../fonts/Roboto-Bold.ttf";
import IMG from '../../img/mainPhoto.jpg';
import '../../css/ui.css';

Font.register({
family: 'Roboto', fonts: [
{ src: Roboto },
{ src: RobotoBold, fontWeight: 700 },
],
format: 'truetype',
});
// Create styles
const styles = StyleSheet.create({
  wrapper:{
    width: 1064,    
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  document: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#989898',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  section: {
    margin: 25,
    padding: 10,
    flexGrow: 1
  },
  doc: {
    display: 'flex',
    flexDirection: 'row',
  },
  change:{
    width: 230,
    height: 330,
    paddingLeft: 20,
    backgroundColor: '#2071B9',
    marginRight: 60,
  },
  h:{
    marginRight:  'auto',
    marginLeft: 'auto',
  },
  hMother:{
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  first:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',    
  },
  img:{
    width: 110,
    marginLeft: 'auto',
  },
  names:{
    marginLeft: 160,
  },
  innerFirst:{
    display:'flex',
    flexDirection:'column',
    width: 400,
    justifyContent:'space-around',
    
  },
  rowInfo:{
    display: 'flex',
    flexDirection: "column",
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignContent: "space-between",
    height: 40,
    width: 550
  },
  otherSection:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: 380
  },
  about:{
    display:'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignContent: "center",
    marginBottom: 10,
  },
  h2:{
    marginRight:  'auto',
    marginLeft: 'auto',
    color: 'black',
  },
  h3:{
    marginRight:  'auto',
    marginLeft: 'auto',
    fontWeight: 700,
  },
  btns:{
    display: 'flex',
    marginTop:20,
    justifyContent: 'space-between',
    width: 600,
    marginLeft: 350
  }
});

const PDFDOC = (props) => {
  const [info, setInfo] = useState(
    {
        lastname: props.data.lastname,
        firstname: props.data.firstname,
        middlename: props.data.middlename,
        jobTitle: props.data.jobTitle,
        salary: props.data.salary,
        typeWork: props.data.typeWork,
        workDays: props.data.workDays,
        phoneNumber: props.data.phoneNumber,
        email: props.data.email,
        cityName: props.data.cityName,
        birhtDay: props.data.birhtDay,
        gender: props.data.gender,
        education: props.data.education,
        jobPosition: props.data.jobPosition,
        jobOrganization: props.data.jobOrganization,
        functions: props.data.functions,
        workPeriodOne: props.data.workPeriodOne,
        workPeriodTwo: props.data.workPeriodTwo,
        university: props.data.university,
        faculty: props.data.faculty,
        specialzation: props.data.specialzation,
        endUnStudy: props.data.endUnStudy,
        formStudy: props.data.formStudy,
        course: props.data.course,
        organization: props.data.organization,
        endCourseStudy: props.data.endCourseStudy, 
        language: props.data.language,
        level: props.data.level,    
        about: props.data.about,
        professional: props.data.professional,  
    }
)  
  return (
    <PDFViewer width={1000} height={1000}>
    <Document style={styles.document}>
                <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <div style={styles.first}>
                    <div style={styles.innerFirst}>
                      <div style={styles.names}>
                        <Text style={styles.h2}>{info.lastname} {info.firstname} {info.middlename}</Text>
                        <Text style={styles.h}> {info.jobTitle}</Text>
                      </div>                
                      <div style={styles.first}>
                        <Text style={{marginRight: 20}} >{info.phoneNumber}</Text>
                        <Text>{info.email}</Text>                 
                      </div>
                      <div style={styles.first}>                    
                        <Text style={{marginRight: 20, marginBottom: 10}}>Занятость: {info.typeWork}</Text>   
                        <Text style={{marginRight: 20}}>График: {info.workDays}</Text>
                        <Text style={{marginRight: 20}}>Желаемая зарплата: {info.salary}Р</Text>                  </div>
                    </div>
                    <Image src={IMG} style={styles.img}/>
                  </div>             
                  <div style={styles.hMother}>
                    <Svg height={10} width={230}>
                      <Line x1="0"
                            y1="7"
                            x2="195"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                    <Text style={styles.h2}>Личная информация</Text>
                    <Svg height={10} width={230}>
                    <Line x1="24"
                            y1="7"
                            x2="290"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                  </div>              
                  <div style={styles.rowInfo}>
                    <Text>Город: {info.cityName}</Text>
                    <Text>Дата рождения: {info.birhtDay}</Text>   
                    <Text>Пол: {info.gender}</Text>
                    <Text>Образование: {info.education}</Text>
                  </div>
                  <div style={styles.hMother}>
                    <Svg height={10} width={230}>
                    <Line x1="0"
                            y1="7"
                            x2="210"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                    <Text style ={styles.h2}>Опыт работы</Text>
                    <Svg height={10} width={230}>
                    <Line x1="10"
                            y1="7"
                            x2="285"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                  </div>             
                  <div style={styles.otherSection}>
                    <div style={{width: 160}}>
                      <Text style={styles.h3}>{info.jobOrganization}</Text>
                      <Text style={styles.h}>{info.jobPosition}</Text>   
                      <Text style={styles.h2}>{info.workPeriodOne} - {info.workPeriodTwo}</Text>
                    </div>                 
                    <div style={{width: 250, marginLeft: 80}}>
                      <Text>{info.functions}</Text>
                      </div>                  
                  </div>
                  <div style={styles.hMother}>
                    <Svg height={10} width={230}>
                    <Line x1="0"
                            y1="7"
                            x2="215"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                    <Text style ={styles.h2}>Образование</Text>
                    <Svg height={10} width={230}>
                    <Line x1="10"
                            y1="7"
                            x2="285"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                  </div>             
                  <div style={styles.otherSection}>
                    <div style={{width: 160}}>
                      <Text style={styles.h3}>{info.university}</Text>
                      <Text style={styles.h2}>{info.endUnStudy}</Text>                    
                    </div>                 
                    <div style={{width: 250, marginLeft: 80}}>
                      <Text>{info.faculty}, {info.specialzation}</Text>
                      <Text>{info.formStudy} форма обучения</Text>
                    </div>                  
                  </div>
                  <div style={styles.hMother}>
                    <Svg height={10} width={230}>
                    <Line x1="0"
                            y1="7"
                            x2="205"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                    <Text style ={styles.h2}>Курсы и тренинги</Text>
                    <Svg height={10} width={230}>
                    <Line x1="20"
                            y1="7"
                            x2="290"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                  </div>             
                  <div style={styles.otherSection}>
                    <div style={{width: 160}}>
                      <Text style={styles.h3}>{info.organization}</Text>
                      <Text style={styles.h2}>{info.endCourseStudy}</Text>                    
                    </div>                 
                    <div style={{width: 250, marginLeft: 80}}>
                      <Text >{info.course}</Text>
                    </div>                  
                  </div>
                  <div style={styles.hMother}>
                    <Svg height={10} width={230}>
                    <Line x1="0"
                            y1="7"
                            x2="200"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                    <Text style ={styles.h2}>Иностранные языки</Text>
                    <Svg height={10} width={230}>
                    <Line x1="20"
                            y1="7"
                            x2="290"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                  </div>             
                  <div style={styles.otherSection}>
                    <Text style={{width: 160, fontWeight: 700}}>{info.language}</Text>
                    <Text style={{width: 250, marginLeft: 80}}>{info.level}</Text>
                  </div>
                  <div style={styles.hMother}>
                    <Svg height={10} width={230}>
                    <Line x1="0"
                            y1="7"
                            x2="230"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                    <Text style ={styles.h2}>О себе</Text>
                    <Svg height={10} width={230}>
                    <Line x1="0"
                            y1="7"
                            x2="290"
                            y2="7"
                            strokeWidth={2}
                            stroke="black"/>
                    </Svg>
                  </div>             
                  <div style={styles.about}>
                    <Text style={{width: 160, fontWeight: 700}}>Личные качества</Text>
                    <Text style={{width: 290, marginLeft: 20}}>{info.about}</Text>
                  </div>
                  <div style={styles.about}>
                    <Text style={{width: 160, fontWeight: 700}}>Профессиональные качества</Text>
                    <Text style={{width: 290, marginLeft: 20}}>{info.professional}</Text>
                  </div>
                </View>            
                </Page>
            </Document>
            </PDFViewer>
  )
}

const Creator = (props) => {
  
    return (  
    <div style={styles.wrapper}>
        <div style={styles.doc}>
            <div style={styles.change}>
              <p style={{fontSize: 14}}>Выберите шаблон резюме</p>
              <p>Стандарт</p>
              <img src={require('../../img/image 6.png')} alt="" width={140}/>
            </div>        
           <PDFDOC data={props.data}/>
        </div>
      <div style={styles.btns}>        
       
      </div>
  </div>
);
}

export default Creator;