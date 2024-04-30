import React from 'react'
import './skills.css';
const Skills = () => {
  return (
    <div>
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills & experiences.</div>
                        <p>1. Collect requirements from clients.</p>
			            <p>2. Design user interface as per user requirements</p>
			            <p>3. Design database structure for UI Forms</p>
			            <p>4. Develope website or web Applications.</p>
		            	<p>5. Integrate API</p>
			            <p>6. Purchase Domain name for website hosting</p>
		            	<p>7. Purchase host plan and host website.</p>
		            	<p>7. Handling cpanel all operations.</p>

                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div class="line css"></div>
			</div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React.js</span>
                            <span>60%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>    </div>
  )
}

export default Skills
