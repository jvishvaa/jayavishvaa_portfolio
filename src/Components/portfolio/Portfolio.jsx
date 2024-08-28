import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { OsaPortfolio, FleetPortfolio, WhenBusPortfolio, EduvisoryPortfolio, CrmPortfolio } from '../../data';

export default function Portfolio() {

    const [Selected, setSelected] = useState(false);
    const [Data, setData] = useState([])

    const List = [
        {
            id: 'CRM',
            title: 'CRM Website'
        },
        {
            id: 'Fleet',
            title: 'Driver Assitance App'
        },
        {
            id: 'WhenBus',
            title: 'Real-time Tracking App'
        },
    
        {
            id: 'shopping',
            title: 'Shopping App'
        },
        {
            id: 'eduvisory',
            title: 'Eduvisory Ed-Tech Website'
        }
        
    ]    

    useEffect(() => {

        switch(Selected){
            case "CRM":
                setData(CrmPortfolio);
                break;
            case "Fleet":
                setData(FleetPortfolio);
                break;
            case "WhenBus":
                setData(WhenBusPortfolio);
                break;
            case "shopping":
                setData(OsaPortfolio);
                break;
            case "eduvisory":
                setData(EduvisoryPortfolio);
                break;
            default:
                setData(CrmPortfolio);
            
        }
        
    }, [Selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {List.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={Selected ===  item.id}
                        setSelected={setSelected }
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {
                    Data.map((d) => (
                        <div className="item">
                            <img src={d.img} alt=" "/>
                            <h3>{d.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
