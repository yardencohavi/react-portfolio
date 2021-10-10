import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
    return (
        <div className="main-info" id="home">
            <h1>Hello</h1>
            <Typed
                strings={[
                    '',
                    'I am Yarden Cohavi',
                    'Full-stack Developer',
                    '3nd. year Computer Science student']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
        </div>
    )
}

export default Header
