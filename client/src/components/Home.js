import React, { useState } from 'react';
import './Home.css'
import Skills from './Skills'

function Home() {
    // state variables
    const [showSkills, setShowSkills] = useState(false);

    return (
        <>            
            <div className="header">
                    <h1>Tuvia Nacshonov</h1>
                    <h3>Full Stack Developer</h3>
                </div>
                <div className="options">
                    <ul>
                        <li onClick={() => setShowSkills(true)}>
                            SKILLS
                        </li>
                        <li>ABOUT ME</li>
                    </ul>
                </div>
                <div className="skills">
                    {!showSkills && (
                        <div>
                        </div>

                    )}
                    {showSkills && <Skills />}
                </div>
        </>
    );
}

export default Home;