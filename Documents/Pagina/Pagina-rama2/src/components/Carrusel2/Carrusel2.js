import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import fotoPieza from "../../img/fotoPieza.jpg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoSala from "../../img/fotoSala.jpg";

const Carrusel2 = () => {
    return (
        <div className='carrusel2'>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item carruselitem2 active">
                        <img src={fotoPieza} className="d-block w-100" alt="Foto de la pieza" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Foto de la pieza</h5>
                            <p>Descripción de la foto de la pieza.</p>
                        </div>
                    </div>
                    <div className="carousel-item carruselitem2">
                        <img src={fotoExterior} className="d-block w-100" alt="Foto del exterior" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Foto del exterior</h5>
                            <p>Descripción de la foto del exterior.</p>
                        </div>
                    </div>
                    <div className="carousel-item carruselitem2">
                        <img src={fotoSala} className="d-block w-100" alt="Foto de la sala" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Foto de la sala</h5>
                            <p>Descripción de la foto de la sala.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carrusel2;
