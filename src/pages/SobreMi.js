import React from "react";

const SobreMi = (props) => {
	return (
		<main>

			<section id="about-me">
				<div class="titulos">
					<h4>Sobre mi</h4>
					<div class="icontitle">
						<hr /><img src="images/png/003-woman.png" /><hr />
					</div>
				</div>
				<p>Me encuentro cursando el segundo año de la tecnicatura superior en desarrollo de software y dando mis primeros pasos como desarrolladora. El descubrimiento del mundo IT me tiene fascinada, por lo que además de los conocimientos académicos estoy en constante capacitación.</p>
				<p>Recientemente obtuve mi certificación del curso <a href="#">Experto Universitario en Programación Web Full Stack de la UTN</a>.</p>
				<p>Actualmente también soy parte del programa ORACLE NEXT EDUCATION, brindado por Oracle y Alura Latam para seguir formándome como full stack y aprendiendo a manejar nuevos lenguajes para mi, como Java. Ya completé dos rutas técnicas completas: <a href="https://app.aluracursos.com/user/paula-adolfi/degree-desarrollo-personal-grupo3-one-15460/certificate">Desarrollo Personal</a> y <a href="https://app.aluracursos.com/user/paula-adolfi/degree-desarrollo-personal-grupo3-one-15460/certificate"> Principiante en Programación</a>.</p>
				<p>Además, me encuentro capacitándome de manera autodidacta a través de distintas herramientas gratuitas, como por ejemplo en Free Code Camp, donde obtuve la certificación en <a href="https://freecodecamp.org/certification/fccf2c85b23-e44d-4f8a-acf8-416d5d9bdd06/responsive-web-design" >Responsive Web Design</a>.</p>
				<p>Si bien no poseo aun experiencia en este área traigo conmigo un abanico de habilidades blandas que he ido adquiriendo en mis mas de 15 años de experiencia laboral. Espero con ansias mi primera oportunidad laboral para poner en práctica los conocimientos adquiridos, pero aun mucho mas de seguir aprendiendo.</p>
				<div class="CV">
					<p><a href="download/cv_paula_adolfi.pdf" target="_blank">Descargar Curriculum Vitae </a></p>
				</div>
			</section>
			<section id="Skills">
				<div class="titulos">
					<h4>Skills</h4>
					<div class="icontitle">
						<hr /><img src="images/png/002-pencil.png" /><hr />
					</div>
				</div>
				<div class="img-skills">
					<img src="images/html.png" alt="html" class="border" />
					<img src="images/css.png" alt="css" class="border" />
					<img src="images/js.png" alt="javascript" class="border" />
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CwM2FHA43HvlEn2qC-udqvLzcR1eQDw7YA&usqp=CAU" alt="React" />
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnWjJ6NuYgr0NQgHVzq55uPhGa7bbGsFU3_Is8hMaCZHoFw3rctcRT2RSGPNCfSK5Q4g&usqp=CAU" alt="bootstrap" />
				</div>
				<div class="img-skills">
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWX1-RTRoxfuElIONw2WOa711Fp6bGUkRpR2_f7BuyfU5G_WPJQYH9sg2CRZesoSsT0Q&usqp=CAU" alt="nodeJs" />
					<img class="border" src="images/express.png" alt="express" />
					<img class="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxHxPHB08ylHPLMDzfunN2MpT02XrIp5UuEgkbIWoHVCgC77I7u80Uqm9o0vAmEUBcOE&usqp=CAU" alt="sql" />
					<img class="border" src="https://miro.medium.com/max/870/1*l9IZ_LeUCP_vwxjDKI2Xgw.jpeg" alt="git" />
				</div>

			</section>

		</main>
	);
}

export default SobreMi;

