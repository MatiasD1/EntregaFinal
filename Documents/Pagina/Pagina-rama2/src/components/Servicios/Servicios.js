import calefaccion from '../../img/icons/calefaccion.png'
import cochera from '../../img/icons/cochera.png'
import frazadasSabanas from '../../img/icons/frazadasSabanas.png'
import heladeraFreezer from '../../img/icons/heladeraFreezer.png'
import microondas from '../../img/icons/microondas.png'
import playa from '../../img/icons/playa.png'
import sommier from '../../img/icons/sommier.png'
import toallas from '../../img/icons/toallas.png'
import TV from '../../img/icons/TV.png'
import vajillaUtensillos from '../../img/icons/vajillaUtensillos.png'
import wifi from '../../img/icons/wifi.png'
import primerosAuxilios from '../../img/icons/primerosAuxilios.png'
import alarma from '../../img/icons/alarma.png' 
import cajaSeguridad from '../../img/icons/cajaSeguridad.png' 
import secador from '../../img/icons/secador.png' 

const Servicios = () => {
    return (
        <div className='servicios'>
            <h1>Servicios</h1>
            <div className='iconos'>

                <div className='icono'>
                    <img src={calefaccion} alt="Icono calefaccion más"/>
                    <p>Calefacción</p>
                </div>
                <div className='icono'>
                    <img src={cochera} alt="Icono cochera"/>
                    <p>Cochera</p>
                </div>
                <div className='icono'>
                    <img src={frazadasSabanas} alt="Icono frazadasSabanas"/>
                    <p>Sábanas y Frazadas</p>
                </div>

                <div className='icono'>
                    <img src={heladeraFreezer} alt="Icono heladeraFreezer"/>
                    <p>Heladera y Freezer</p>
                </div>
                <div className='icono'>
                    <img src={microondas} alt="Icono microondas"/>
                    <p>Microondas</p>
                </div>
                <div className='icono'>
                    <img src={playa} alt="Icono playa"/>
                    <p>Playa cercana</p>
                </div>

                <div className='icono'>
                    <img src={secador} alt="Icono secador"/>
                    <p>Secador</p>
                </div>
                <div className='icono'>
                    <img src={cajaSeguridad} alt="Icono caja de seguridad"/>
                    <p>Caja de Seguridad</p>
                </div>
                <div className='icono'>
                    <img src={alarma} alt="Icono alarma"/>
                    <p>Alarma</p>
                </div>

                <div className='icono'>
                    <img src={vajillaUtensillos} alt="Icono vajillaUtensillos"/>
                    <p>Vajilla y Utensillos</p>
                </div>
                <div className='icono'>
                    <img src={wifi} alt="Icono wifi"/>
                    <p>Wi-fi</p>
                </div>
                <div className='icono'>
                    <img src={sommier} alt="Icono sommier"/>
                    <p>Sommier</p>
                </div>

                <div className='icono'>
                    <img src={TV} alt="Icono TV"/>
                    <p>TV</p>
                </div>
                <div className='icono'>
                    <img src={toallas} alt="Icono toallas"/>
                    <p>Toallas</p>
                </div>
                <div className='icono'>
                    <img src={primerosAuxilios} alt="Icono primerosAuxilios"/>
                    <p>Botiquín</p>
                </div>
                

            </div>
        </div>  
    );
}

export default Servicios;