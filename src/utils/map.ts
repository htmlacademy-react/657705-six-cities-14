import { Icon } from 'leaflet';

import { TIconConfig } from '../types/map';

function createIcon(config: TIconConfig) {
  return new Icon({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY],
  });
}

export { createIcon };
