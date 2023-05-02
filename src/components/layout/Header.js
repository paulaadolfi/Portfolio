import React from "react";
import './../../styles/pages/Header.css';
import "./../../App.css"

const Header = (props) => {
    return (            
        <section id="welcome-section">
            <div class="container-welcome">
                <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/foto_perfil_dfsymn.jpg"/>
                <h1>BIENVENIDO</h1>
                <p>Soy Paula Adolfi, web developer y te invito a conocer mi portfolio.</p>
            </div>
    
</section>
        
    );
}

export default Header;