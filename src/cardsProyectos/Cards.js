import React from "react";
import Card from "./Card";

const cards= [
    {
        id:14,
        title: 'Vino en movimiento',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683042212/portfolio/proyectos/vem_e1elh3.png',
        text1: 'Proyecto freelance. Rediseño e incorporación de nuevas funcionalidades.', 
        text2: "Full responsive. Rediseño, creación de tienda online y otras funcionalidades solicitadas (tienda secundaria,parametrizacion de envíos, seguimiento de visitantes, etc). Completamente funcional y autoadministrable. Repositorio no disponible ya que el contenido es privado del cliente.",
        urlRepo:'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683041561/portfolio/proyectos/noDisponible_nrelft.png',
        urlPage:  'https://www.vinoenmovimiento.com/'
    },
    {
        id:13,
        title: 'Invitación',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683033047/portfolio/proyectos/Invitacion_xsba75.png',
        text1: 'Proyecto freelance fullStack. Invitación para evento social.', 
        text2: "Full responsive. Front desarrollado en secciones en React. Incluia sección cuenta regesiva de la fecha del evento; sección con fotos y videos administrable por el usuario; sección con información sobre el evento, redireccion hacia el gps con la ubicación, etc; sección de contacto con formulario, via email y whatsapp. Generacion y consumo de Api. Completamente funcional y autoadministrable. Repositorio de pagina de prueba, url no disponible ya que el contenido real es privado del cliente.",
        urlRepo:  'https://github.com/paulaadolfi/invitacion',
        urlPage:'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683041561/portfolio/proyectos/noDisponible_nrelft.png'
    },
    {
        id:12,
        title: 'Pet Shop',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683041031/portfolio/proyectos/petShop_ywzkvz.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css y JavaScript ', 
        text2: "Proyecto desarrollado para el programa ONE de Oracle & Allura latam de pagina de administracion de productos, clientes, etc con el fin de poner en práctica crud asícrono utilizando json server. Pagina no disponible, solo repositorio",
        urlRepo:  'https://github.com/paulaadolfi/doguito',
        urlPage:'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683041561/portfolio/proyectos/noDisponible_nrelft.png'
    },
    {
        id:11,
        title: 'To do list',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683037863/portfolio/proyectos/todoApp_eo1p8s.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css y JavaScript ', 
        text2: "Proyecto desarrollado para el programa ONE de Oracle & Allura latam con el fin de poner en práctica la manipulación de elementos del DOM, fechas, local storage, etc.",
        urlRepo:  'https://github.com/paulaadolfi/ToDoList',
        urlPage:'https://paulaadolfi.github.io/ToDoList/'
    },
    {
        id:10,
        title: 'Proyecto Transporte',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683029520/portfolio/proyectos/transporte_ze7ghr.png',
        text1: 'Front desarrollado en React y Back en nodejs + express. Base de datos sql.', 
        text2: "Full responsive. Front desarrollado en 4 secciones. Generacion y consumo de Api para la carga de datos e imagenes desde base de datos y envio de mail a traves de nodemailer. Paginas de login y de administracion de contenidos. Todas con vistas en handlebars. Utilización de dependencias para el manejo de variables de entorno. Completamente funcional y autoadministrable. Se realizo despliegue en heroku. Actualmente no se encuentra en línea, se puede visualizar video en boton de visitar página",
        urlRepo:  'https://github.com/paulaadolfi/transporte',
        urlPage:'https://res.cloudinary.com/dz6gqdulr/video/upload/v1662727846/portfolio/proyectos/videos/Proyecto_transporte_gbceno.mp4'
    },
    {
        id:9,
        title: 'Encriptador',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683034866/portfolio/proyectos/encriptador_ilplky.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css y JavaScript.', 
        text2: "Primer challenge del programa ONE de Oracle & Allura latam. Desarrollado con el fin de encriptar y desencriptar texto ingresado por el usuario. Diseño creado a partir de modelo en Figma. ",
        urlRepo:  'https://github.com/paulaadolfi/encriptador',
        urlPage:'https://paulaadolfi.github.io/encriptador/'
    },
    {
        id:8,
        title: 'Mini Allura',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683036089/portfolio/proyectos/mini_allura_ym6hwz.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css. ', 
        text2: "Proyecto desarrollado para el programa ONE de Oracle & Allura latam con el fin de poner en práctica FlexBox de css.",
        urlRepo:  'https://github.com/paulaadolfi/Mini-Alura',
        urlPage:'https://paulaadolfi.github.io/Mini-Alura/'
    },
    {
        id:7,
        title: 'Allura Store',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683036384/portfolio/proyectos/alura_store_wa6bzj.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css. ', 
        text2: "Proyecto desarrollado para el programa ONE de Oracle & Allura latam con el fin de poner en práctica Css Grid.",
        urlRepo:  'https://github.com/paulaadolfi/alura-store',
        urlPage:'https://paulaadolfi.github.io/alura-store/'
    },
    {
        id:6,
        title: 'Apeperia',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1683037151/portfolio/proyectos/apeperia_uvzdya.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css. ', 
        text2: "Proyecto desarrollado para el programa ONE de Oracle & Allura latam con el fin de poner en práctica distintos estilos css.",
        urlRepo:  'https://github.com/paulaadolfi/Apeperia',
        urlPage:'https://paulaadolfi.github.io/Apeperia/'
    },
    {
        id:5,
        title: 'Landing Page',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724578/portfolio/landing_product_cb6lal.png',
        text1: 'Proyecto de frontend, desarrollado con Html, Css y JavScript. ', 
        text2: "Pagina de aterrizaje de producto ficticio desarrollada para poner en práctica diversos conceptos de práctica de Html y Css.",
        urlRepo:  'https://codepen.io/Paula-Adolfi/pen/rNpxGwO',
        urlPage:'https://codepen.io/Paula-Adolfi/full/rNpxGwO'
    },
    {
        id:4,
        title: 'Proyecto Coca-Cola',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/cocacola_dpxk3w.png',
        text1: 'Proyecto de frontend, desarrollado con Html, Css y JavScript. ', 
        text2: "Pagina de aterrizaje de producto ficticio desarrollada para poner en práctica diversos conceptos de práctica de Html y Css.", 
        urlRepo:  'https://github.com/paulaadolfi/Proyecto_coca',
        urlPage:'https://paulaadolfi.github.io/Proyecto_coca'
    },
    {
        id:3,
        title: 'Form',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724568/portfolio/encuesta_dayage.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css. ', 
        text2: "Pagina de práctica para profundizar conocimientos sobre formularios; algunos ejemplos serían las diversas etiquetas que se pueden utilizar, campos y patrones requeridos, etc.",
        urlRepo:  'https://codepen.io/Paula-Adolfi/pen/ExbBQEx',
        urlPage:'https://codepen.io/Paula-Adolfi/full/ExbBQEx'
    },
    {
        id:2,
        title: 'Documentacion técnica',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724567/portfolio/dt_mhaimn.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css. ', 
        text2: "Pagina de práctica para profundizar conocimientos sobre estilos css.", 
        urlRepo:  'https://codepen.io/Paula-Adolfi/pen/PoEmaRr',
        urlPage:'https://codepen.io/Paula-Adolfi/full/PoEmaRr'
    },
    {
        id:1,
        title: 'Pagina Tributo',
        image: 'https://res.cloudinary.com/dz6gqdulr/image/upload/v1662724574/portfolio/tributo_axurco.png',
        text1: 'Proyecto de frontend, desarrollado con Html y Css. ', 
        text2: "Mi primera pagina web, realizada como practica para la certificacion de Responsive Web Design de Free Code Camp.",  
        urlRepo:  'https://codepen.io/Paula-Adolfi/pen/eYeXvPq',
        urlPage:'https://codepen.io/Paula-Adolfi/full/eYeXvPq'
    }
  
]

function Cards() {
    return (
    <div className="container" >
        <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <Card title={card.title} image={card.image} text1={card.text1} text2={card.text2} urlRepo={card.urlRepo} urlPage={card.urlPage}/>
                    </div>
                ))
            }
        </div>
        
        
    </div>
    )
}

export default Cards;