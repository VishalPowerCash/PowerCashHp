import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigItemCard = ({ heading, paragraph, buttonText, leftBody, rightBody }) => {
    return (
        <div className="container my-5">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <button className="btn btn-primary mb-3">{buttonText}</button>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="p-4 border rounded shadow-sm">
                        <div className="d-flex flex-wrap">
                            {leftBody}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="p-4 border rounded shadow-sm">
                        <div className="d-flex flex-wrap">
                            {rightBody}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigItemCard;
