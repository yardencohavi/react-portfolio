import Navigation from './views/navigationBar/navigationBar'
import './App.css';
import AboutMe from './views/aboutMe/AboutMe'
import Header from './views/header/Header';
import Particles from "react-particles-js";
import Skills from './views/skills/Skills'
import Portfolio from './views/portfolio/Portfolio'
import ContactMe from './views/contectMe/ContactMe';

function App() {
  return (
    <div className="App">
    <Header/>
    <Navigation />
    <Particles
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 50,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 200,
                duration: 2
              }
            }
          }
        }}
      />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe/>
    </div>
  );
}

export default App;
