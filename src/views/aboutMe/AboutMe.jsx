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
                <p>High abilities of analytics, thinking and creativity, learning and understanding in depth,
                striving for excellence, high professionalism, commitment and excellent interpersonal skills.
                Able to work both independently or in a team, while demonstrating diligence, initiative and responsibility.
                </p>
                <p>Looking for a role as software engineer</p>
            </div>
        </div>
    )
}

export default AboutMe
