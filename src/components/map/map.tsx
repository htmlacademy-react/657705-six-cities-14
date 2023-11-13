import { useEffect, useRef } from 'react';
import { LatLngLiteral, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TOffer } from '../../types/offer';
import useMap from '../../hooks/useMap';
import { createIcon } from '../../utils/map';
import { MapIconConfig } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectActiveOffer } from '../../store/offers/offers-selector';

type TMapProps = {
  offers: TOffer[];
};

function Map({ offers }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const hoveredOffer = useAppSelector(selectActiveOffer);

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
          (id === hoveredOffer)
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
