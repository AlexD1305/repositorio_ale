
import global from './global';


import imagenesData from './pages/imagenesData'; // Añadir importación
const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        
        case '/index.html': // Añadir caso para la galería
            pageVariables = imagenesData;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;