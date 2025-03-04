import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

// Agregar los enlaces de la fuente de Google Fonts
const link1 = document.createElement('link');
link1.rel = 'preconnect';
link1.href = 'https://fonts.googleapis.com';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = true;
document.head.appendChild(link2);

const link3 = document.createElement('link');
link3.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
link3.rel = 'stylesheet';
document.head.appendChild(link3);

const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';

// Agregar el enlace al <head> del documento
document.head.appendChild(googleFontsLink);


// Crear el elemento link para preconectar a Google Fonts
const link4 = document.createElement('link');
link4.rel = 'preconnect';
link4.href = 'https://fonts.googleapis.com';

const link5 = document.createElement('link');
link5.rel = 'preconnect';
link5.href = 'https://fonts.gstatic.com';
link5.crossOrigin = 'true';

// Crear el elemento link para cargar la hoja de estilos de Google Fonts
const link6 = document.createElement('link');
link6.href = 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
link6.rel = 'stylesheet';

// Agregar los elementos link al head del documento
document.head.appendChild(link4);
document.head.appendChild(link5);
document.head.appendChild(link6);

const link7 = document.createElement('link');
link7.rel = 'preconnect';
link7.href = 'https://fonts.googleapis.com';

const link8 = document.createElement('link');
link8.rel = 'preconnect';
link8.href = 'https://fonts.gstatic.com';
link8.crossOrigin = 'true';

const link9 = document.createElement('link');
link9.href = 'https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
link9.rel = 'stylesheet';

// Agregar los elementos <link> al <head> del documento
document.head.appendChild(link7);
document.head.appendChild(link8);
document.head.appendChild(link9);

const link10 = document.createElement('link');
link10.rel = 'preconnect';
link10.href = 'https://fonts.googleapis.com';

const link11 = document.createElement('link');
link11.rel = 'preconnect';
link11.href = 'https://fonts.gstatic.com';
link11.crossOrigin = 'true';

const link12 = document.createElement('link');
link12.href = 'https://fonts.googleapis.com/css2?family=Imprima&family=Khula:wght@300;400;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
link12.rel = 'stylesheet';

// Agregar los elementos <link> al <head> del documento
document.head.appendChild(link10);
document.head.appendChild(link11);
document.head.appendChild(link12);

// Agregar el script de Google Maps al <head> del documento
const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik`;
googleMapsScript.async = true;
googleMapsScript.defer = true;
document.head.appendChild(googleMapsScript);

// src/utils/loadGoogleMaps.js
export const loadGoogleMaps = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve(window.google);
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve(window.google);
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.head.appendChild(script);
    }
  });
};

// Renderizar la aplicación de React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
