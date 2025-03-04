// src/components/Mapa/Mapa.js
import React, { useEffect } from 'react';
import { loadGoogleMaps } from '../../index.js';

const Mapa = () => {

    useEffect(() => {
        const iniciarMap = (google) => {
            const coord = { lat: -37.95762986843124, lng: -57.546956576341046 };
            const map = new google.maps.Map(document.getElementById('mapa'), {
                zoom: 10,
                center: coord 
            });
            new google.maps.Marker({
                position: coord,
                map: map
            });
        };

        loadGoogleMaps('YOUR_API_KEY')
            .then((google) => {
                iniciarMap(google);
            })
            .catch((error) => {
                console.error('Error loading Google Maps:', error);
            });
    }, []);

    return (
        <div id="mapa" className='Mapa'>
          
        </div>  
    );
}

export default Mapa;

