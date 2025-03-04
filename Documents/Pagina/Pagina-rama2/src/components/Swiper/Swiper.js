// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Aldrey from "../../img/Aldrey.png"
import parqueSanMartin from "../../img/parqueSanMartin.jpg"
import centroPuerto from "../../img/centroPuerto.jpg"
import balnearioPuntaMogotes from "../../img/balnearioPuntaMogotes.jpg"
import playaChica from "../../img/playaChica.jpg"
import playaGrande from "../../img/playaGrande.jpg"
import villaVictoria from "../../img/villaVictoria.jpg"
import torreAgua from "../../img/torreDelAgua.jpg"
import centroGuemes from "../../img/centroGuemes.jpg"
import playaVarese from "../../img/playaVarese.jpg"

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{ margin: '20px 30px' }} // Establece un ancho máximo y centra el carrusel
    >
      <SwiperSlide>
        <img src={Aldrey} alt="Paseo Aldrey" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Paseo Aldrey 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={parqueSanMartin} alt="Slide 2" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Parque San Martín 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={centroPuerto} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Centro Gastronómico del Puerto 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={balnearioPuntaMogotes} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Balnearios de Punta Mogotes 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={playaChica} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Playa Chica 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={playaGrande} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Playa Grande 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={villaVictoria} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Villa Victoria 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={torreAgua} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Torre del Agua 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={centroGuemes} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Centro Comercial Güemes 1.2Km</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={playaVarese} alt="Slide 3" style={{ width: '100%', height: '400px' }} />
        <p className='textoSlides'>Playa Varese 1.2Km</p>
      </SwiperSlide>
    </Swiper>
  );
};