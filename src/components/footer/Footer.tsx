import logo from "../../assets/imgs/logoBoLa.png";

import "./assets/css/style.css";

export default function Footer(){

    return (
        <footer className="flex flex-col lg:flex-row gap-10 items-center lg:justify-around flex-wrap bg-secondary p-20 h-auto w-full">
            <div className="flex flex-col sm:justify-center gap-5">
		        <img src={logo} style={{ width: "8rem" }} alt="Logo" />
                <div className="emptyRectangle" style={{minWidth:"250px"}}/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
            </div>

            <div className="flex flex-col sm:justify-center gap-5">
                <div className="emptyRectangle" style={{minWidth:"250px"}}/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
            </div>

            <div className="flex flex-col sm:justify-center gap-5">
                <div className="emptyRectangle" style={{minWidth:"250px"}}/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
                <div className="emptyRectangle"/>
            </div>

            {/* <div className="emptyRectangle mt-20" style={{ minWidth: "30%", margin: "auto" }} /> */}

        </footer>
    );

}