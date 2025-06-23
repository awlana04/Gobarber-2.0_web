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

    // return async () => await map.setTarget(null!);
  }

  addMapPinMarker(mapListener: Map): void {
    mapListener.on(
      'singleclick',
      (event: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>) => {
        const layer = new Vector({
          source: new SourceVector({
            features: [
              new Feature({
                geometry: new Point(event.coordinate),
              }),
            ],
          }),

          style: new Style({
            image: new Icon({
              src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',
            }),
          }),
        });

        mapListener.addLayer(layer);
      }
    );
  }

  transformLocation(coordinate: any): any {
    return fromLonLat(coordinate);
  }
}
