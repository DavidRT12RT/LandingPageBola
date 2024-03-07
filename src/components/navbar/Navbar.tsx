import { useState } from "react";
import { Button } from "@nextui-org/react";
import logo from "../../assets/imgs/logoBoLa.png";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

  	const OptionsMobile = (() => {
		return (
			isOpen && (
				<ul className="flex flex-col items-center justify-center gap-5 lg:hidden w-screen h-screen" style={{zIndex:"1000"}}>
					<IoClose style={{fontSize:"2rem"}} onClick={() => setIsOpen(!isOpen)}/>
       				<li><a href="#">Inicio</a></li>
        			<li><a href="#">Academias</a></li>
        			<li><a href="#">Nosotros</a></li>
        			<li><a href="#">Ayuda</a></li>
        			<li><a href="#">¿Eres un Club?</a></li>
        			<a href="#" className="text-white hover:text-gray-300">Ingresar</a>
        			<Button className="bg-button px-5" color="primary">Registrate</Button>
      			</ul>
			)
		);
  	});

  	const OptionsDesktop = (() => {
		return (
			<>
		   		<ul className={`hidden lg:flex space-x-4`}>
       				<li><a href="#">Inicio</a></li>
        			<li><a href="#">Academias</a></li>
        			<li><a href="#">Nosotros</a></li>
        			<li><a href="#">Ayuda</a></li>
        			<li><a href="#">¿Eres un Club?</a></li>
      			</ul>

   	   			<div className="hidden lg:flex items-center gap-5">
        			<a href="#" className="text-white hover:text-gray-300">Ingresar</a>
        			<Button className="bg-button px-5" color="primary">Registrate</Button>
      			</div>
			</>
		);
  	});


  return (
  	<nav className="flex justify-between px-5 lg:justify-around items-center py-5 w-full bg-primary" style={{position:"fixed",zIndex:"10000"}}>
		{
			isOpen === false && (
			<>
				<img src={logo} style={{ width: "7rem" }} alt="Logo" />
    			<button
          			onClick={() => setIsOpen(!isOpen)}
          			className="block text-white hover:text-gray-300 focus:outline-none lg:hidden"
        		>
        			<svg
            			className="h-6 w-6 fill-current"
            			xmlns="http://www.w3.org/2000/svg"
            			viewBox="0 0 24 24"
          			>
              			<path
                			fillRule="evenodd"
                			clipRule="evenodd"
                			d="M4 4H20V6H4V4ZM4 11H20V13H4V11ZM4 18H20V20H4V18Z"
              			/>
          			</svg>
        		</button>
			</>
			)

		}

		<OptionsDesktop/>
		<OptionsMobile/>

    </nav>
  );
}
