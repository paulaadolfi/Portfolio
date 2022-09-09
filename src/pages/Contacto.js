import React from "react";

const Contacto = (props) => {
    return (
        <main>
            		<section id="Repository">	
			<div class="titulos">
				<h4>Repositorio</h4>
				<div class="icontitle">
					<hr/><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/004-folder_xfdah1.png"/><hr/>
				</div>
			</div>	
			<div class="icons">
				<a href="https://codepen.io/Paula-Adolfi" target="_blank" id="profile-link"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/001-codepen_rcaxss.png"/></a>
				<a href="https://github.com/paulaadolfi?tab=repositories" target="_blank"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/002-github_dq8lfp.png"/></a>
			</div>
		</section>	
		<section id="Contact">	
			<div class="titulos">
				<h4>Contacto</h4>
				<div class="icontitle">
					<hr/><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/005-send_wyiysn.png"/><hr/>
				</div>
			</div>	
			<div class="icons">
				<a href="https://www.linkedin.com/in/paula-adolfi" target="_blank"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/001-linkedin_brhj07.png"/></a>
				<a href="mailto:paula.adolfi@gmail.com"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724566/portfolio/002-gmail_vedg2z.png" class="border"/></a>
				<a href="https://api.whatsapp.com/send?phone=542215689328" target="_blank"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/003-whatsapp_ojimxg.png" class="border"/></a>
			</div>
		</section>
        </main>
    );
}

export default Contacto;