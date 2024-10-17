import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCard = ({ heading, paragraph, buttonText, className = "", pClass = "text-muted", locbtn, body }) => {
    return (

        <div className={`container p-0 card border-0 rounded-4 h-100 ${className}`} style={{ backgroundColor: "white" }}>

            <div className="text-start p-4">
                <div className="p-1">
                    <h2 className='mt-0 p-0' style={{ fontWeight: "700" }}>{heading}</h2>
                    <p className={pClass} >{paragraph}</p>
                    <button className="btn-sm rounded-3 py-1 px-3 mb-3 py-0 px-2" style={{ backgroundColor: locbtn ? locbtn : "#ced4da" }}>{buttonText}</button>
                </div>
            </div>
            <div className=" mt-2 ">

                <div className=" mb-2" style={{ overflow: "hidden" }}>
                    {body}
                </div>

            </div>
        </div>
    );
};

export default ItemCard;
