import React from "react";

const Proyectos = (props) => {
    return (
        <main>
            <section id="projects">
                <div class="titulos">
                    <h4>Proyectos</h4>
                    <div class="icontitle">
                        <hr /><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/001-skill_kdewu5.png" /><hr />
                    </div>
                </div>
                <section class="project-tile">
                    <h5>HTLM + CSS</h5>
                    <div className="carrusel">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/cocacola_dpxk3w.png" class="d-block w-100" alt="Proyecto coca"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h6>Proyecto Coca Cola</h6>
                                        <h6><a href="https://paulaadolfi.github.io/Proyecto_coca"> Visitar Sitio</a> -- <a href="https://github.com/paulaadolfi/Proyecto_coca"> Ver Código</a></h6>
                                    </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724568/portfolio/encuesta_dayage.png" class="d-block w-100" alt="Encuesta"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h6>Encuesta</h6>
                                        <h6><a href="https://codepen.io/Paula-Adolfi/full/ExbBQEx"> Visitar Sitio</a> // <a href="https://codepen.io/Paula-Adolfi/pen/ExbBQEx"> Ver Código</a></h6>
                                    </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724578/portfolio/landing_product_cb6lal.png" class="d-block w-100" alt="landing page"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h6>Landing Page</h6>
                                        <h6><a href="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724574/portfolio/tributo_axurco.png"> Visitar Sitio</a> // <a href="https://codepen.io/Paula-Adolfi/pen/rNpxGwO"> Ver Código</a></h6>
                                    </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/dt_mhaimn.png" class="d-block w-100" alt="Documentacion técnica"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h6>Documentacion técnica</h6>
                                        <h6><a href="https://codepen.io/Paula-Adolfi/full/PoEmaRr"> Visitar Sitio</a> // <a href="https://codepen.io/Paula-Adolfi/pen/PoEmaRr"> Ver Código</a></h6>
                                    </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724574/portfolio/tributo_axurco.png" class="d-block w-100" alt="Pagina Tributo"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h6>Pagina Tributo</h6>
                                        <h6><a href="https://codepen.io/Paula-Adolfi/full/eYeXvPq"> Visitar Sitio</a> // <a href="https://codepen.io/Paula-Adolfi/pen/eYeXvPq"> Ver Código</a></h6>
                                    </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                    <h5>Full Stack</h5>
                    <div id="otrosProyectos">
                        <div class="Project">
                            <p>Proyecto transporte</p>
                            <div class="Project-img">
                                <iframe width="560" height="315" src="https://res.cloudinary.com/dz6gqdulr/video/upload/v1662727846/portfolio/proyectos/videos/Proyecto_transporte_gbceno.mp4" allowfullscreen></iframe>
                            </div>
                            <a href="https://github.com/paulaadolfi/transporte" Target="_blank" class="codigo">Ver codigo</a>
                            <h6>Pagina de empresa de servicio de transportes. Frontend desarrollado en React con 4 secciones, consumo de Api para la carga de datos e imágenes y generación de api para envío de mails a través de nodejs/nodemailrer. Full responsive. Backend desarrollado en nodejs con express y base de datos sql. Pagina de login y para CRUD de novedades que se envían a React a través de Api. Todas con vistas en handlebars. Utilización de dependencias para el manejo de variables de entorno. Completamente funcional y autoadministrable. Se realizo despliegue en heroku.</h6>
                        </div>
                        
                    </div>
                </section>




            </section>
        </main>
    );
}

export default Proyectos;