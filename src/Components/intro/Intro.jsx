import './intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
// import Myphoto from '../../assets/IntroPhoto.jpg';
import Profile from '../../assets/profile.jpeg';
import DownArrow from '../../assets/downArrow.png';

export default function Intro() {

    const textRef = useRef();
 
    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 60,
                strings: ["Software","Web","Mobile App"] 
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={Profile} alt="" style={{width:'93%', height:'95%'}}/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jayavishvaa J</h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src={DownArrow} alt=""/>
                </a>
            </div>
        </div>
    )
}
