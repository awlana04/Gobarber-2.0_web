'use client';

import { Feature, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as SourceVector } from 'ol/source';
import React, { RefAttributes, useEffect, useRef, useState } from 'react';
import Vector from 'ol/layer/Vector';
import { Map as OlMap } from 'ol';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import useSigninBarberFormHandler from '@/handlers/signin-barber-form-handler';

import SigninBarberPage from '@/pages/signin-barber-page';
import HandleMapAdapter from '../adapters/implementations/handle-map-adapter';

export default function SigninBarberWindow() {
  const barberNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const locationRef = useRef<HTMLTextAreaElement>(null);

  const { file, fileUrl, setFile, setFileUrl, handleChange } =
    useHandleImagesHook();

  const {
    isOpenAtNight,
    isOpenOnWeekends,
    setIsOpenAtNight,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { submitHandler } = useSigninBarberFormHandler();

  const barberNameValue =
    barberNameRef.current! &&
    barberNameRef.current!.value !== null &&
    barberNameRef.current!.value;
  const descriptionValue =
    descriptionRef.current! &&
    descriptionRef.current!.value !== null &&
    descriptionRef.current!.value;
  // const locationValue =
  //   locationRef.current! &&
  //   locationRef.current!.value !== null &&
  //   locationRef.current!.value;

  // const submit = () => {
  //   submitHandler(
  //     barberNameRef.current!.value,
  //     locationRef.current!.value,
  //     descriptionRef.current!.value,
  //     file,
  //     isOpenAtNight,
  //     isOpenOnWeekends
  //   );
  // };

  const [location, setLocation] = useState<number[]>([]);

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { longitude, latitude } = coords;

      if (location.length === 0) {
        setLocation([longitude, latitude]);
      }
    });
  }, [location]);

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();

    const centeredMap = handleMapAdapter.transformLocation(location);

    const map = handleMapAdapter.createMap(mapRef, centeredMap);
    handleMapAdapter.addMapPinMarker(map);

    return () => map.setTarget(null!);

    // handleMapAdapter.addMapPinMarker(map);
    // const osmLayer = new TileLayer({
    //   source: new OSM(),
    // });

    // const centeredMap = fromLonLat(location);

    // const map = new OlMap({
    //   target: mapRef.current!,
    //   layers: [osmLayer],
    //   view: new View({
    //     center: centeredMap,
    //     zoom: 16,
    //   }),
    // });

    // map.on('singleclick', (event) => {
    //   const layer = new Vector({
    //     source: new SourceVector({
    //       features: [
    //         new Feature({
    //           geometry: new Point(event.coordinate),
    //         }),
    //       ],
    //     }),

    //     style: new Style({
    //       image: new Icon({
    //         src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',
    //       }),
    //     }),
    //   });

    //   map.addLayer(layer);
    // });

    // return () => map.setTarget(null!);
  });

  return (
    <SigninBarberPage
      nameValue={barberNameValue as string}
      nameRef={barberNameRef}
      descriptionValue={descriptionValue as string}
      descriptionRef={descriptionRef}
      locationRef={mapRef}
      // locationValue={locationValue as string}
      file={file}
      setFile={setFile}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
      handleChange={handleChange}
      isOpenAtNight={isOpenAtNight}
      setIsOpenAtNight={setIsOpenAtNight}
      isOpenOnWeekends={isOpenOnWeekends}
      setIsOpenOnWeekends={setIsOpenOnWeekends}
      submitHandler={() => {}}
    />
  );
}
