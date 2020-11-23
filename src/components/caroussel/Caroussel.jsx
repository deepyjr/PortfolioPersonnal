import React from 'react';
import "./Caroussel.css";
import Typical from 'react-typical';

function Caroussel() {
    return (
        <div className="containerCarou">
            <h1>Bonjour, je m'appelle Raphaël</h1>
            <Typical
                steps={['Je suis', 1000, 'Développeur', 500]}
                loop={Infinity}
                wrapper="p"
            />
        </div>
    )
}

export default Caroussel
