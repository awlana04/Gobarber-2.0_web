import { Feature, MapBrowserEvent, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as SourceVector } from 'ol/source';
import Vector from 'ol/layer/Vector';
import { Map } from 'ol';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Draw from 'ol/interaction/Draw';

import { coordinate, Coordinate } from 'openlayers';
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

  addMapPinMarker(mapListener: Map): void {
    const layer = new Vector({
      source: new SourceVector(),
      style: new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',
        }),
      }),
    });

    mapListener.addLayer(layer);

    mapListener.on('click', (event) => {
      const marker = new Feature(new Point(event.coordinate));

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
