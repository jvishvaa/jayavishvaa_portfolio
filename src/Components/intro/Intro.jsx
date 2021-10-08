import './intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import Myphoto from '../../assets/IntroPhoto.jpg';
import DownArrow from '../../assets/downArrow.png';

export default function Intro() {

    const textRef = useRef();
 
    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 60,
                strings: ["Software","Web","Mobile","Front-end"] 
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={Myphoto} alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jayavishvaa Jayabal </h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src={DownArrow} alt=""/>
                </a>
            </div>
        </div>
    )
}
