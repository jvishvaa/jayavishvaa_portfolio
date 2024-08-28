import './works.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';
// import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

import Crm from '../../assets/CRM/crm.png';
import Fleet from '../../assets/Fleet/Fleet2.jpg';
import WhenBus from '../../assets/WhenBus/Whenbus1.jpg';
import OSA from '../../assets/OSA/OSA5.jpg';

import FleetIcon from '../../assets/WorkIcons/Fleet_icon.png';
import WhenBusIcon from '../../assets/WorkIcons/WhenIcon.png';
import OSAIcon from '../../assets/WorkIcons/OSAIcon.png';

export default function Works() {

    const [CurrSlide, setCurrSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: FleetIcon,
            title: "CRM Project",
            describ: "This software is designed to manage marketing activities for school websites, helping to organize and categorize leads based on their interests.",
            img: Crm,
            github: 'https://github.com/jvishvaa/Crm-project/tree/jayavishvaa-stage-gcp',
            width: 800
        },
        {
            id: 2,
            icon: FleetIcon,
            title: "Driver assistance application",
            describ: "This software is aimed to provide optimal fleet management and routing for the IIT Madras logistics domain",
            img: Fleet,
            github: 'https://github.com/jayavishvaa/Fleet_And_Vehicle_Tracking'
        },
        {
            id: 3,
            icon: WhenBusIcon,
            title: "Crowdsourced public transportation App",
            describ: "This software is used for providing real-time tracking information of public transportation vehicles by utilizing crowdsourced data from the users",
            img: WhenBus,
            github: 'https://github.com/jayavishvaa/WhenBus'
        },
        {
            id: 4,
            icon: OSAIcon,
            title: "Shopping App",
            describ: "This software is aimed to provide a shopping platform for both the seller and customer where mainly targetting the supermarkets",
            img: OSA,
            github: 'https://github.com/jayavishvaa/OSA-Shopping-App'
        }
    ]

    const handleClick = (way) => {
        way === 'left' 
        ? setCurrSlide(CurrSlide > 0 ? CurrSlide-1 : 2) 
        : setCurrSlide(CurrSlide < data.length-1 ?  CurrSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{  transform: `translateX(-${CurrSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.describ}
                                    </p>
                                    <a href={d.github}><span>Projects</span></a>
                                    {/* <span>Projects</span> */}
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" width={data?.width} style={{width: d.width ? `${d.width}px` : '350px'}}/>
                            </div>
                        </div>
                    </div>
                ))
                } 
            </div>
            <ArrowBackIosIcon 
                className="arrow left" 
                style={{color:'white',fontSize:50}}
                onClick={() => handleClick("left")}
            />
            <ArrowForwardIosIcon 
                className="arrow right" 
                style={{color:'white',fontSize:50}}
                onClick={() => handleClick( )}
            />
        </div>
    )
}
