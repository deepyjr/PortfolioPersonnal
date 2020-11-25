import React from 'react';
import "./DownPart.css";

function DownPart() {
    return (
        <div>
            <img className="courbe1" src={process.env.PUBLIC_URL + '/courbe1.svg'} alt="React Logo" />
            <img className="bas" src={process.env.PUBLIC_URL + '/bas.svg'} alt="React Logo" />
            <img className="courbe2" src={process.env.PUBLIC_URL + '/téléchargement.svg'} alt="React Logo" />
        </div>
    )
}

export default DownPart
