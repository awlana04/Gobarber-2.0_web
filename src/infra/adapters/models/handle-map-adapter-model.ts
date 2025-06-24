import { MapBrowserEvent } from 'ol';
import { Coordinate } from 'openlayers';

export default interface HandleMapAdapterModel {
  createMap(
    target: React.RefObject<HTMLDivElement | null>,
    initialView: Coordinate
  ): void;
  addMapPinMarker(mapListener: any, setPinLocation: any): void;
  transformLocation(coordinate: Coordinate): Coordinate;
  getActualUserLocation(setLocation: any, location: any): void;
}
