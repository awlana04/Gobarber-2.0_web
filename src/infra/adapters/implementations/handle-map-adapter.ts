import { Feature, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as SourceVector } from 'ol/source';
import Vector from 'ol/layer/Vector';
import { Map } from 'ol';
import 'ol/ol.css';
import { fromLonLat, transform } from 'ol/proj';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

import { Coordinate } from 'openlayers';
import HandleMapAdapterModel from '../models/handle-map-adapter-model';

export default class HandleMapAdapter implements HandleMapAdapterModel {
  createMap(
    target: React.RefObject<HTMLDivElement | null>,
    initialView: Coordinate
  ): Map {
    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    return new Map({
      target: target.current!,
      layers: [osmLayer],
      view: new View({
        center: initialView,
        zoom: 16,
      }),
    });
  }

  pinMarker(mapListener: any, location: any): void {
    const layer = new Vector({
      source: new SourceVector(),
      style: new Style({
        image: new Icon({
          src: `${process.env.NEXT_PUBLIC_FRONTEND_URI}/gobarber_map_pin.svg`,
          anchor: [0.5, 0.95],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          width: 56,
        }),
      }),
    });

    mapListener.addLayer(layer);

    const pin = transform(location, 'EPSG:4326', 'EPSG:3857');

    layer.getSource()?.clear();
    layer.getSource()?.addFeature(new Feature(new Point(pin)));
  }

  addMapPinMarker(
    mapListener: Map,
    setPinLocation: any,
    defaultLocation?: any
  ): void {
    const layer = new Vector({
      source: new SourceVector(),
      style: new Style({
        image: new Icon({
          src: `${process.env.NEXT_PUBLIC_FRONTEND_URI}/gobarber_map_pin.svg`,
          anchor: [0.5, 0.95],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          width: 56,
        }),
      }),
    });

    mapListener.addLayer(layer);

    if (defaultLocation) {
      const pin = transform(defaultLocation, 'EPSG:4326', 'EPSG:3857');

      layer.getSource()?.clear();
      layer.getSource()?.addFeature(new Feature(new Point(pin)));
    }

    mapListener.on('click', (event) => {
      layer.getSource()?.clear();

      const marker = new Feature(new Point(event.coordinate));

      setPinLocation(transform(event.coordinate, 'EPSG:3857', 'EPSG:4326'));

      layer.getSource()?.clear();
      layer.getSource()?.addFeature(marker);
    });
  }

  transformLocation(coordinate: any): any {
    return fromLonLat(coordinate);
  }

  getActualUserLocation(setLocation: any, location: any): void {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { longitude, latitude } = coords;

      if (location.length === 0) {
        setLocation([longitude, latitude]);
      }
    });
  }
}
