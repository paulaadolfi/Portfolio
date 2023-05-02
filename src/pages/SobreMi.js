import React from "react";
import { Link } from "react-router-dom";
import './../styles/pages/SobreMi.css';
import './../styles/pages/Skills.css';
import "./../App.css"

const SobreMi = (props) => {
	return (
		<main>

			<section id="about-me">
				<div class="titulos">
					<h4>Sobre mi</h4>
					<div class="icontitle">
						<hr /><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/003-woman_knsmda.png" /><hr />
					</div>
				</div>
				<p>Me encuentro cursando el segundo año de la tecnicatura superior en desarrollo de software y dando mis primeros pasos como desarrolladora. El descubrimiento del mundo IT me tiene fascinada, por lo que además de los conocimientos académicos estoy en constante capacitación.</p>
				<p class="subrayado">Certificaciones:</p>
				<ul> 
					<li class="certificaciones"><a href="https://drive.google.com/file/d/1fGSkFsIXGC2hQ4LBqC7dRAGkpe74GitK/view?usp=sharing" target="_blank">Experto Universitario en Programación Web Full Stack de la UTN</a>, donde trabajamos con React en el frontend y nodeJs junto con una gran cantidad de librerias en el backend.</li>
					<li class="certificaciones"><a href="https://drive.google.com/file/d/1x1j9jMzX22bkiG3LM1yc8DtJRyxKAjAN/view?usp=sharing" target="_blank">Programa ORACLE NEXT EDUCATION, brindado por Oracle y Alura Latam</a>, que incluye 3 rutas principales: <a href="https://drive.google.com/file/d/1Hbo70Hi_u2wwamwwRfLvTorcjbTk7SgU/view?usp=sharing"target="_blank"> Principiante en Programación</a>, <a href="https://drive.google.com/file/d/1ThyQtRU5wzhQMOjBmaVMf_oFt0jozhMT/view?usp=sharing"target="_blank"> Front end</a> y <a href="https://drive.google.com/file/d/1OYqlo6LrXmqhbdNApHd4GCgCqgSPXOES/view?usp=sharing"target="_blank"> Java orientado a objetos</a>.</li>
					<li class="certificaciones"><a  className="linkCertificaciones" href="https://drive.google.com/file/d/1FOvHvnjdTJsPlEjGuml28--SQfo1-8pE/view?usp=sharing" target="_blank">Argentina Programa #YoProgramo</a>, otorgado por el INTI, enfocado en lógica de programación orientada a objetos utlizando lenguajes como javasScript y Ruby.</li>
					<li class="certificaciones">Actualmente soy parte del programa Argentina Programa 4.0. Dentro de dicha formación ya obtuve mi certificación en <a href="https://drive.google.com/file/d/1RmKzNDbwON5PFlCTsrhb17C6wc73m3ty/view?usp=sharing" target="_blank">Introducción a la Programación</a> y me encuentro cursando la etapa de backend con Java.</li>
					<li class="certificaciones">En marzo de este año relicé un bootcamp de Accenture brindado por Educación IT sobre <a href="https://drive.google.com/file/d/1KBdHbQK_pa_nABURm1myGDtE3LijG2Q6/view?usp=sharing" target="_blank">Analisis Funcional</a>, donde se desalloraron temas como la gestión de proyectos con diversas metodologías ágiles para sus distintas etapas(Design Thinking, Scrum, Kanban, etc), gestión de productos y product management. Analisis funcional y testing manual.</li>
					<li class="certificaciones">Además, siempre continúo capacitándome de manera autodidacta a través de distintas herramientas gratuitas, como por ejemplo en Free Code Camp, donde obtuve la certificación en <a href="https://freecodecamp.org/certification/fccf2c85b23-e44d-4f8a-acf8-416d5d9bdd06/responsive-web-design" target="_blank">Responsive Web Design</a></li>
				</ul>
				<p>Si bien no poseo aun experiencia en este área traigo conmigo un abanico de habilidades blandas que he ido adquiriendo en mis más de 15 años de experiencia laboral. El trabajar tantos años en el sector postventa me hizo tener una gran capacidad para la resolución de conflictos, el análisis de posibilidades y prioridades, pero sobre todo en cuanto a las relaciones interpersonales; mientras que las tareas desarrolladas en el sector administrativo me hicieron una persona sumamente organizada, responsable y con profesionalidad en el manejo de la información.</p>
				<div className="btnRosa">
					<a className="cv" href="https://drive.google.com/file/d/1xGE8s5d1KXy5TPyJCa6W1NoxRpYhkdb1/view?usp=sharing" target="_blank">Curriculum Vitae </a>
				</div>
			</section>
			<section id="Skills">
				<div class="titulos">
					<h4>Hard Skills</h4>
					<div class="icontitle">
						<hr /><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/002-pencil_usrykl.png" /><hr />
					</div>
				</div>
				<div class="img-skills">
					<img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/html_erh3i7.jpg" alt="html" class="border" />
					<img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724568/portfolio/css_hvwpe4.png" alt="css" class="border" />
					<img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/js_a5i7og.png" alt="javascript" class="border" />
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CwM2FHA43HvlEn2qC-udqvLzcR1eQDw7YA&usqp=CAU" alt="React" />
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnWjJ6NuYgr0NQgHVzq55uPhGa7bbGsFU3_Is8hMaCZHoFw3rctcRT2RSGPNCfSK5Q4g&usqp=CAU" alt="bootstrap" />
				</div>
				<div class="img-skills">
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWX1-RTRoxfuElIONw2WOa711Fp6bGUkRpR2_f7BuyfU5G_WPJQYH9sg2CRZesoSsT0Q&usqp=CAU" alt="nodeJs" />
					<img class="border" src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/express_dcwdut.png" alt="express" />
					<img class="border" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png" alt="java" />
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxHxPHB08ylHPLMDzfunN2MpT02XrIp5UuEgkbIWoHVCgC77I7u80Uqm9o0vAmEUBcOE&usqp=CAU" alt="sql" />
					<img class="border" src="https://miro.medium.com/max/870/1*l9IZ_LeUCP_vwxjDKI2Xgw.jpeg" alt="git" />
					
				</div>

			</section>

		</main>
	);
}

export default SobreMi;

