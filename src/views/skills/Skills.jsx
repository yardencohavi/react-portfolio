import React from 'react'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/techs'
import './skills.css'

function Skills() {
    return (
        <div className="technologies__container" id="skills">
           <div>
               <h1 style={{textAlign:'center'}}>Skills</h1>
           </div>
           <div className="techs__cards__container">
               {techs.map( (e,idx) => {
                   return(
                    <div key={idx} className="tech__card">
                        <DevIcon className="tech__icon" icon={e.iconName} />
                        <span style={{margin:'5px',fontSize:'1.5rem'}}>{e.name}</span>
                    </div>
                   )
               })}
           </div>
        </div>
    )
}

export default Skills
