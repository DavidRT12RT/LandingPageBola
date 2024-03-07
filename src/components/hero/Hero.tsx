import { Button, Input } from "@nextui-org/react";

//Icons
import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";


import "./assets/css/style.css";

import heroImage from "./assets/img/heroIMG.jpeg";
import { useState } from "react";

interface Suggestion{
    name:string,
    description:string;
}


export default function HeroSection (){

    
    const [ suggestions ] = useState<Suggestion[]>([
        {
            name:"Padel",
            description:"Padel"
        },
        {
            name:"Futbol",
            description:"Futbol"
        },
        {
            name:"Rugby",
            description:"Rugby"
        }
    ]);


    return (
        <section className="heroSection">
            <img className="heroImage" src={heroImage}/>
            <div className="heroContent">
                <div className="description">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl">BUSCA, RESERVA Y JUEGA</h1>
                    <p className="lg:text-lg mt-2">ENCUENTRA EL MEJOR LUGAR PARA HACER TU DEPORTE FAVORITO</p>
                </div>
                <div className="finder">
                    <Input
                        size="lg"
                        fullWidth
                        classNames={{
                            input: [
                                "bg-transparent",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-dark text-black",
                            ],
                            inputWrapper:[
                                // "p-10"
                            ]
                        }}
                        startContent={<CiSearch style={{fontSize:"40px"}} className="text-black"/>}
                        placeholder="¿Que quieres entrenar?"
                        endContent={
                            <Button className="bg-button px-10 text-lg" color="primary">Buscar</Button>
                        }
                    />
                    <div className="suggestions bg-white">
                        {
                            suggestions.slice(0,3).map((suggestion:Suggestion) => (
                                <div className="suggestionCard" key={suggestion.name}>
                                    <p className="lg:text-xl"><GrLocation/></p>
                                    <p>{suggestion.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );

}