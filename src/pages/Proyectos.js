import React from "react";
import "./../App.css";
import Cards from "./../cardsProyectos/Cards";

const Proyectos = (props) => {
  return (
    <main>
      <section id="projects">
        <div class="titulos">
          <h4>Proyectos</h4>
          <div class="icontitle">
            <hr />
            <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730975/portfolio/iconos/001-skill_owgm7z.png" />
            <hr />
          </div>
        </div>
        <section>
          <div>
            <Cards/>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Proyectos;
