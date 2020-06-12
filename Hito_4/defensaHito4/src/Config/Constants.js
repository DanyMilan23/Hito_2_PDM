import {Dimensions} from "react-native";
const config={
    HEADER_HEIGHT:Dimensions.get('window').height-45,
    SCREEN_WIDTH:Dimensions.get('window').width,
    SCREEN_HEIGHT:Dimensions.get('window').height,
};
const strings={
    PASSWORD:"Password",
    TITLE_BUTTON:"Login",
    EMAIL:"Email",
    PDM:"PDM",
    MATERIA:"Programacion de Dispositvos Moviles - Unifranz",
    MATERIA2:"Moviles - Unifranz",
    DEFENSA:"DEFENSA HITO 3 ",
    DOCENTE:"Docente:William Barra Gestion 2020",
    GESTION:"Gestion 2020",
    FIREBASE:"FIREBASE",
    TEMA:"Integracion de React Native con Firebase",
    TEMA2:"con Firebase",
    PREV:"Prev",
    NEXT:"Next",
}

export default {
    CONFIG:config,
    STRINGS:strings,
}