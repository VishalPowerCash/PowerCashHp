// BankLogosDiv.js
import React from 'react';
import './ClientDiv.css';  // Import the CSS for styling

const ClientDiv = () => {
    const style = { height: "40px", color: "white" }
    return (
        <div className="container client-logos-container mb-5 mt-4 ">
            <div className="client-logos-wrapper">
                <div className="client-logos">
                    {/* Repeat logo divs with bank logos */}
                    <img style={style} src="ClientLogos/cadburyLogo.png" alt="client Logo" className="client-logo mt-1" />
                    <img style={{ height: "33px" }} src="ClientLogos/bikanoLogo.png" alt="client Logo" className="client-logo mt-1" />
                    <img style={style} src="ClientLogos/haldiramLogo.png" alt="client Logo" className="client-logo" />
                    <img style={{ height: "50px" }} src="ClientLogos/bunmaskaLogo.svg" alt="client Logo" className="client-logo" />
                    <img style={{ height: "52px" }} src="ClientLogos/sunCableLogo.svg" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/cadburyLogo.png" alt="client Logo" className="client-logo mt-1" />
                    <img style={{ height: "33px" }} src="ClientLogos/bikanoLogo.png" alt="client Logo" className="client-logo mt-1" />
                    <img style={style} src="ClientLogos/haldiramLogo.png" alt="client Logo" className="client-logo" />
                    <img style={{ height: "50px" }} src="ClientLogos/bunmaskaLogo.svg" alt="client Logo" className="client-logo" />
                    <img style={{ height: "52px" }} src="ClientLogos/sunCableLogo.svg" alt="client Logo" className="client-logo" />
                    <img style={style} src="ClientLogos/cadburyLogo.png" alt="client Logo" className="client-logo mt-1" />
                    <img style={{ height: "33px" }} src="ClientLogos/bikanoLogo.png" alt="client Logo" className="client-logo mt-1" />
                    <img style={style} src="ClientLogos/haldiramLogo.png" alt="client Logo" className="client-logo" />
                    <img style={{ height: "50px" }} src="ClientLogos/bunmaskaLogo.svg" alt="client Logo" className="client-logo" />
                    <img style={{ height: "52px" }} src="ClientLogos/sunCableLogo.svg" alt="client Logo" className="client-logo" />


                </div>
            </div>
        </div>
    );
};

export default ClientDiv;

