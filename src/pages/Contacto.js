import React from "react";

const Contacto = (props) => {
    return (
        <main>
            		<section id="Repository">	
			<div class="titulos">
				<h4>Repositorio</h4>
				<div class="icontitle">
					<hr/><img src="images/png/004-folder.png"/><hr/>
				</div>
			</div>	
			<div class="icons">
				<a href="https://codepen.io/Paula-Adolfi" target="_blank" id="profile-link"><img src="images/png/001-codepen.png"/></a>
				<a href="https://github.com/paulaadolfi?tab=repositories" target="_blank"><img src="images/png/002-github.png"/></a>
			</div>
		</section>	
		<section id="Contact">	
			<div class="titulos">
				<h4>Contacto</h4>
				<div class="icontitle">
					<hr/><img src="images/png/005-send.png"/><hr/>
				</div>
			</div>	
			<div class="icons">
				<a href="https://www.linkedin.com/in/paula-adolfi" target="_blank"><img src="images/png/001-linkedin.png"/></a>
				<a href="mailto:paula.adolfi@gmail.com"><img src="images/png/002-gmail.png" class="border"/></a>
				<a href="https://api.whatsapp.com/send?phone=542215689328" target="_blank"><img src="images/png/003-whatsapp.png" class="border"/></a>
			</div>
		</section>
        </main>
    );
}

export default Contacto;