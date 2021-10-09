import React from 'react'
import './aboutMe.css'
import person from '../../images/photo_yarden.png'

function AboutMe() {
    return (
        <div className="about__container" id="about-me" >
            <div>
                <img src={person} alt="person icon"></img>
            </div>

            <div className="about__text">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio error corporis? Quos labore pariatur quod quasi earum expedita quisquam dignissimos laudantium laboriosam necessitatibus, nulla officia maxime vitae commodi a?</p>
            </div>
        </div>
    )
}

export default AboutMe
