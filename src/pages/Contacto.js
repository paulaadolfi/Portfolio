import React from "react";

const Contacto = (props) => {
    return (
        <main>
            		<section id="Repository">	
			<div class="titulos">
				<h4>Repositorio</h4>
				<div class="icontitle">
					<hr/><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/004-folder_dlnucq.png"/><hr/>
				</div>
			</div>	
			<div class="icons">
				<a href="https://codepen.io/Paula-Adolfi" target="_blank" id="profile-link"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/001-codepen_mc8hkm.png"/></a>
				<a href="https://github.com/paulaadolfi?tab=repositories" target="_blank"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/002-github_vouyvk.png"/></a>
			</div>
		</section>	
		<section id="Contact">	
			<div class="titulos">
				<h4>Contacto</h4>
				<div class="icontitle">
					<hr/><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/005-send_rdedi5.png"/><hr/>
				</div>
			</div>	
			<div class="icons">
				<a href="https://www.linkedin.com/in/paula-adolfi" target="_blank"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730975/portfolio/iconos/001-linkedin_rfeslx.png"/></a>
				<a href="mailto:paula.adolfi@gmail.com"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/002-gmail_f21s7j.png" class="border"/></a>
				<a href="https://api.whatsapp.com/send?phone=542215689328" target="_blank"><img src="https://res.cloudinary.com/dz6gqdulr/image/upload/v1662730976/portfolio/iconos/003-whatsapp_tjoozt.png" class="border"/></a>
			</div>
		</section>
        </main>
    );
}

export default Contacto;