import Mapa from '../Mapa/Mapa.js'
import Swiper from '../Swiper/Swiper.js';
import Swiper2 from '../Swiper2/Swiper2.js';
import Carrusel2 from '../Carrusel2/Carrusel2.js';

const Ubicacion = () => {
    return (
        
        <div className='ubicacion'>
            <div className='carruselUbicacion'>
                
            <Carrusel2/>
            </div>
            <div className='textoUbicacion'>
            <Swiper2/>
            </div>
            <div className='owlComponenteCarrusel'>

            </div>
            <div className='serviciosCercanos'>
            <Swiper/>
            </div>
            <div className='mapaUbicacion'>
                <Mapa/>
            </div>
            
        </div>
    );
}

export default Ubicacion;
