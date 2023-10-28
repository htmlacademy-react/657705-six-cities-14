import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import { TOffer } from '../../types/offer';
import useMap from '../../hooks/useMap';

type TMapProps = {
  offers: TOffer[];
  hoveredOffer: TOffer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, hoveredOffer }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({
    mapRef,
    city: offers[0].city
  });

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
            ? currentCustomIcon
            : defaultCustomIcon;

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
