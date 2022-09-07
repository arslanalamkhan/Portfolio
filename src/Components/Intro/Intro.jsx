import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className='intro'>
        {/* Left Side */}
            <div className='i-left'>
            <div className='i-name'>
                <span>Hy! I Am</span>
                <span>Arslan Khan</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <button className='button i-button'>Hire Me</button>  
            <div className='i-icons'>
                <img src={Github}  alt=""/>
                <img src={Linkedin} alt=""/>
                <img src={Instagram} alt=""/>
            </div>
            </div>

        {/* Right Side */}
            <div className='i-right'>
                
                <img src={Vector1}  alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <img src={glassesimoji} alt=""/>
                <div style={{top : '-2%', left:'52%' }}>
                <FloatingDiv image={Crown} txt1='Full Stack' txt2='Developer' />
                </div>
                <div style={{top : '18rem', left:'0rem' }}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>
                {/* Blur Divs */}
                <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur' style={{background: '#C1F5FF', top:'19rem', width:'21rem',height:'15rem',left:'-9rem'}}></div>
            
            </div>
            
        </div>
    )

}

export default Intro