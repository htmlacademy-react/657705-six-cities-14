//FIXME: Объединить с map-location?

export type TIconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
}

export type TMapIcon = {
  [K in 'Default' | 'Active']: TIconConfig;
}
