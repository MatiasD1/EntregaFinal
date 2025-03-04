import React from 'react';

const EnlaceContacto = ({ imageSrc }) => {
    return (
        <div className='EnlaceContacto'>
            <div className="contenedorEnlaceContacto">
                <p className='FraseEnlaceContacto'>lorem ipsum lorem ipsum lorem <br /> ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                <img src={imageSrc} className="fotoEnlaceContacto" alt="Enlace Contacto" />
                <a href="/contacto" className="textoEnlaceContacto">Contacto</a>
            </div>
        </div>
    );
}

export default EnlaceContacto;
