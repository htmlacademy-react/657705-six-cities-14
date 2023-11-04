import { useEffect, useRef } from 'react';
import { LatLngLiteral, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TOffer } from '../../types/offer';
import useMap from '../../hooks/useMap';
import { createIcon } from '../../utils/map';
import { MapIconConfig } from '../../const';

type TMapProps = {
  offers: TOffer[];
  hoveredOffer: TOffer | undefined;
};

function Map({ offers, hoveredOffer }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const mapLatLng: LatLngLiteral = {
        lat: offers[0].city.location.latitude,
        lng:  offers[0].city.location.longitude
      };

      const mapZoom = offers[0].city.location.zoom;

      map.setView(mapLatLng, mapZoom);

    }
  }, [map, offers]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        const currentIcon =
          (id === hoveredOffer?.id)
            ? createIcon(MapIconConfig.Active)
            : createIcon(MapIconConfig.Default);

        marker.setIcon(currentIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOffer]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;
