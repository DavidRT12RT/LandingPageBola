import { Academy } from "../interfaces/Academy";

interface AcademyCardProps {
    academy:Academy;
};

import academyImage from "../assets/img/academyImage.png";

export default function AcademyCard({academy}:AcademyCardProps){

    return (
        <div className="academyCard">
            <img className="academyImage" src={academyImage}/>
            <div className="content">
                <h3 className="font-bold text-xl">{academy.name}</h3>
                <p>{academy.location}</p>
            </div>
        </div>
    );
}