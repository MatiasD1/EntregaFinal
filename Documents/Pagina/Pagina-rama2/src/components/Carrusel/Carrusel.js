import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Había que importarlo para que funcione el carrusel
import fotoPieza from "../../img/fotoPieza.jpg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoSala from "../../img/fotoSala.jpg";

const Carrusel = () => {
    return (
        <div className='carrusel'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner carrusel">
                    <div className="carousel-item active">
                        <img src={fotoPieza} className="d-block w-100" alt="Foto de la pieza"/>
                    </div>
                    <div className="carousel-item">
                        <img src={fotoExterior} className="d-block w-100" alt="Foto del exterior"/>
                    </div>
                    <div className="carousel-item">
                        <img src={fotoSala} className="d-block w-100" alt="Foto de la sala"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carrusel;
