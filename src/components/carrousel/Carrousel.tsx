//Data and interfaces
import { academies } from "./data/academies.data";
import { Academy } from "./interfaces/Academy";

import AcademyCard from "./components/AcademyCard";

import "./assets/css/style.css";

export default function CarrouselSection(){

    return (
        <section className="bg-primary p-10 lg:p-10">
            <h2 className="text-xl lg:text-2xl">ENCUENTRA LAS MEJORES ACADEMIAS EN TU CIUDAD</h2>
            <div className="flex flex-col gap-8 lg:gap-15 md:flex-row mt-10 overflow-auto">
                {academies.map((academy:Academy) => (
                    <AcademyCard academy={academy} key={academy.id}/>
                ))}
            </div>
        </section>
    );

}