
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const LocationMapSection = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // La ubicación es Cra. 8 #21-61, San Nicolas, Cali, Valle del Cauca
    const mapLocation = {
      lat: 3.4516,  // Coordenadas aproximadas para San Nicolas, Cali
      lng: -76.5320
    };

    const loadGoogleMapsScript = () => {
      // Solo cargamos el script si no existe ya
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        window.initMap = () => {
          initializeMap(mapLocation);
        };
      } else {
        initializeMap(mapLocation);
      }
    };

    const initializeMap = (location: { lat: number, lng: number }) => {
      if (mapContainerRef.current && window.google) {
        const map = new window.google.maps.Map(mapContainerRef.current, {
          center: location,
          zoom: 16,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ weight: "2.00" }]
            },
            {
              featureType: "all",
              elementType: "geometry.stroke",
              stylers: [{ color: "#9c9c9c" }]
            },
            {
              featureType: "all",
              elementType: "labels.text",
              stylers: [{ visibility: "on" }]
            },
            {
              featureType: "administrative",
              elementType: "all",
              stylers: [{ visibility: "on" }]
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#46bcec" }, { visibility: "on" }]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        });

        // Añadir marcador en el mapa
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'ExtremeWorld Fitness',
          animation: window.google.maps.Animation.DROP
        });

        // Añadir info window al marcador
        const infowindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px; font-weight: bold;">ExtremeWorld Fitness</h3>
              <p style="margin: 0;">Cra. 8 #21-61, San Nicolas<br>Cali, Valle del Cauca</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });
      }
    };

    loadGoogleMapsScript();

    return () => {
      // Limpiar la función global
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gym-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestra Ubicación</h2>
            <p className="text-lg text-white/90 mb-4">
              Encuéntranos en el corazón de San Nicolas, Cali
            </p>
            <div className="flex items-center justify-center text-white/90">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Cra. 8 #21-61, San Nicolas, Cali, Valle del Cauca</span>
            </div>
          </div>
          
          <div 
            ref={mapContainerRef} 
            className="w-full h-[300px] sm:h-[400px] rounded-lg shadow-xl border-2 border-white/20"
          ></div>
          
          <div className="mt-4 text-center">
            <a 
              href="https://goo.gl/maps/W1XLhFZ1jAv9Uraz5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white underline hover:text-white/80"
            >
              Ver en Google Maps
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Añadir tipo global para Google Maps
declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

export default LocationMapSection;
