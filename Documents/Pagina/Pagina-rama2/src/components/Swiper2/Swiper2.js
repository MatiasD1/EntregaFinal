// Importa los componentes de Swiper necesarios
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import parqueSanMartin from "../../img/parqueSanMartin.jpg"
import centroPuerto from "../../img/centroPuerto.jpg"
import balnearioPuntaMogotes from "../../img/balnearioPuntaMogotes.jpg"

const Swiper2 = () => {
  return (
    <Swiper
    modules={[Pagination, Autoplay, A11y, Navigation]}
    spaceBetween={30}
    slidesPerView={1}
    
    autoplay={{ delay: 5000 }}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{ margin: '20px 30px' }} // Establece un ancho máximo y centra el carrusel
  >
      <SwiperSlide>
            <img src={parqueSanMartin} alt="Slide 2" style={{ width: '100%', height: '400px' }} />
      </SwiperSlide>
      <SwiperSlide>
            <img src={centroPuerto} alt="Slide 2" style={{ width: '100%', height: '400px' }} />
      </SwiperSlide>
      <SwiperSlide>
            <img src={balnearioPuntaMogotes} alt="Slide 2" style={{ width: '100%', height: '400px' }} />
      </SwiperSlide>
      <SwiperSlide>
            <img src={parqueSanMartin} alt="Slide 2" style={{ width: '100%', height: '400px' }} />
      </SwiperSlide>
      <SwiperSlide>
            <img src={centroPuerto} alt="Slide 2" style={{ width: '100%', height: '400px' }} />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Swiper2;
