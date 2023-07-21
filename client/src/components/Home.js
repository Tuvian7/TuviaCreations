import React, { useState } from 'react';
import './Home.css'
import Skills from './Skills'

function Home() {
    // state variables
    const [showSkills, setShowSkills] = useState(false);

    return (
        <>
            <div class="container">
                <div class="header">
                    <h1>Tuvia Nacshonov</h1>
                    <h3>Full Stack Developer</h3>
                </div>
                <div class="options">
                    <ul>
                        <li onClick={() => setShowSkills(!showSkills)}>
                            SKILLS
                        </li>
                        <li>ABOUT ME</li>
                    </ul>
                </div>
                <div class="skills">
                    {showSkills && <Skills />}
                </div>
            </div>
        </>
    );
}

export default Home;