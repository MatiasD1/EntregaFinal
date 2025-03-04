import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import fotoDucha from "../../img/Ducha.JPG"
import fotoHabitacion from "../../img/fotoHabitacion.JPG"
import fotoSala from "../../img/fotoSala.jpg"
import living from "../../img/Living.JPG"
import simboloMas from "../../img/icons/simboloMas.png" 
import Servicios from '../Servicios/Servicios.js';
import florFooter from '../../img/icons/florFooter.png' 
import imagenPlaya from '../../img/playa.jpg'
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto.js';

const Departamentos = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images] = useState([
        fotoPieza,
        CostaImagen,
        fotoExterior,
        // Agrega más URLs de imágenes aquí según sea necesario
    ]);
    const handleImageClick = () => {
        setSelectedImage(images);
        setShowCarrusel(true);
    };
    return (
        <div className='departamentos'>
            
            <div className='portadaDepartamentos'>

            </div>
            
            <div class="containerDepartamentos">

                <div className="item">
                      <div className='fotosDeptos' onClick={handleImageClick}>
                            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                            <img src={fotoSala} alt="Imagen 1" className='fotoDepto'/>
                      </div>
                    <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PB1</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”. <br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={florFooter} alt="icono flor decorativo" className='florFooter'/>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>
                <div className="item">
                <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PB2</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”.<br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={florFooter} alt="icono flor decorativo" className='florFooter'/>
                    </div>
                    <div className='fotosDeptos' onClick={handleImageClick}> 
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoDucha} alt="Imagen 2" className='fotoDepto'/>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>
                <div className="item">
                    <div className='fotosDeptos' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoHabitacion} alt="Imagen 3" className='fotoDepto'/>
                    </div>
                    <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PA1</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”.<br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={florFooter} alt="icono flor decorativo" className='florFooter'/>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>
                <div className="item">
                <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PA2</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”.<br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={florFooter} alt="icono flor decorativo" className='florFooter'/>
                    </div>
                    <div className='fotosDeptos' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={living} alt="Imagen 4" className='fotoDepto'/>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>                
            </div>
            {showCarrusel && <GaleriaImagenes images={selectedImage} onClose={() => setShowCarrusel(false)} />} {/* Renderiza el carrusel si showCarrusel es true */}
            <Servicios/>
            <EnlaceContacto imageSrc={imagenPlaya} /> 
        </div>
    );
}

export default Departamentos;


/*
import './Departamentos.css'; 

const Departamentos = () => {
    return (
        <div className='departamentos'>
            <p>Hola</p>
        </div>  
    );
}

export default Departamentos;
*/ 