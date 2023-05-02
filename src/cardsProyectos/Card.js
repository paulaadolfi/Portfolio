import React, { useState } from "react";
import "./../styles/Card.css";


function Card({title, image, text1, text2, urlRepo, urlPage} ) {
    const [isTextHidden, setIsTextHidden] = useState(true);

    const toggleText = () => {
        setIsTextHidden(!isTextHidden);
    };

    return (
        <div className="card">
            <img  className="card-img-top" src={image}></img>
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <div className="card-text  text-secondary">
                    <p>{text1}</p>
                    {isTextHidden ? null : <p className="showText">{text2}</p>}
                    <button type="button" class="btn btn-outline-secondary readMore-btn" onClick={toggleText}>
                        {isTextHidden ? "Ver mas" : "Ver Menos"}
                    </button> 
                </div>        
                <a href={urlPage} className="btnRosa" target="_blank" rel="noopener noreferrer">Visitar página</a>
                <a href={urlRepo} className="btnRosa" target="_blank" rel="noopener noreferrer">Visitar repositorio</a>
            </div>
        </div>
    );
}



export default Card;
