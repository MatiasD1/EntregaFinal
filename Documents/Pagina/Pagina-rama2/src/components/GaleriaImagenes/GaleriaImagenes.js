import React, { useState } from 'react';

const GaleriaImagenes = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    return (
        <div className="galeria-container">
            {/* Overlay para cerrar la galería al hacer clic fuera de la imagen */}
            <div className="galeria-overlay" onClick={onClose}></div>
            <div className="galeria-content">
                {/* Contenedor de diapositivas de la galería */}
                <div className="galeria-slides">
                    {/* Mapeo de imágenes para mostrar cada diapositiva */}
                    {images.map((image, index) => (
                        <div className={index === currentSlide ? "galeria-slide active" : "galeria-slide"} key={index}>
                            {/* Si la imagen actual es la seleccionada, la muestra */}
                            {index === currentSlide && <img src={image} alt={`Imagen ${index + 1}`} className="galeria-image" />}
                        </div>
                    ))}
                </div>
                {/* Botones para navegar entre las diapositivas */}
                <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
                <button className="next-btn" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
}

export default GaleriaImagenes;

