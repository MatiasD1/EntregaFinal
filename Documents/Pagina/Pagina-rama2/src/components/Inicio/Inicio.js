import Carrusel from '../Carrusel/Carrusel';
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto';
import imagenPlaya from '../../img/playa.jpg'
import TextAnimation from '../TextAnimation1/TextAnimation1';

const Inicio = () => {
    
    return (
        <div className='Inicio'>
            <Carrusel/>
            <TextAnimation/>
            <h2>Titulo</h2>
            <p className='textoFrase'>
                Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
            </p>
            <div className='presentacionInicio'>
                <h2 className='tituloInicio'>Lorem Ipsum</h2>
                <h3 className='fraseInicio'>Una vez instalada la extensión, abre el archivo donde deseas generar texto Lorem Ipsum.</h3>
                <p className='textoInicio'>
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code. Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.  Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.  Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code
                </p> 
            </div>
           
            <EnlaceContacto imageSrc={imagenPlaya} />
        </div>  
    );
}

export default Inicio;
