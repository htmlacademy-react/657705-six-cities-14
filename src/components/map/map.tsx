import { useEffect, useRef } from 'react';
import { LatLngLiteral, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import { createIcon } from '../../utils/map';
import { MapIconConfig } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectActiveOffer } from '../../store/offers/offers-selector';
import { TOffer, TOfferPreview } from '../../types/offer';

type TMapProps = {
  offers: TOfferPreview[] | TOffer[];
  classBlock: string;
  offer?: TOffer | null;
}

function Map({offers, classBlock, offer = null}: TMapProps) {
  const hoveredOffer = useAppSelector(selectActiveOffer);

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
  }, [map, offers, offer]);

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

      if (offer) {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(createIcon(MapIconConfig.Active)).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOffer, offer]);

  return (
    <section
      ref={mapRef}
      className={`${classBlock}__map map`}
    >
    </section>
  );
}

export default Map;
