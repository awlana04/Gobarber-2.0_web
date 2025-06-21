'use client';

import { Feature, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as SourceVector } from 'ol/source';
import React, { useEffect, useRef, useState } from 'react';
import Vector from 'ol/layer/Vector';
import { Map as OlMap } from 'ol';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';

import {
  NameInputPropsMappedType,
  DescriptionInputPropsMappedType,
  LocationInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { FormImagesInputProps } from '@/presentation/types/form-images-input-props-type';
import { FormTwoRadioButtonProps } from '@/presentation/types/two-radio-buttons-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import ButtonDisabledType from '@/presentation/types/button-disabled-type';

import ContentTemplate from '@/templates/content-template';

import BackToLogon from '@/atoms/back-to-logon';
import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import NameInputFragment from '@/fragments/name-input-fragment';
import LocationInputFragment from '@/fragments/location-input-fragment';
import DescriptionInputFragment from '@/fragments/description-input-fragment';

import image from '@/public/gobarber_image004.svg';

import translate from '@/shared/utils/translate';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

type SigninBarberScreenType = NameInputPropsMappedType &
  DescriptionInputPropsMappedType &
  // LocationInputPropsMappedType &
  FormImagesInputProps &
  FormTwoRadioButtonProps &
  ButtonDisabledType &
  SubmitHandlerType;

export default function SigninBarberScreen(props: SigninBarberScreenType) {
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
    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    const centeredMap = fromLonLat(location);

    const map = new OlMap({
      target: mapRef.current!,
      layers: [osmLayer],
      view: new View({
        center: centeredMap,
        zoom: 16,
      }),
    });

    map.on('singleclick', (event) => {
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

      map.addLayer(layer);
    });

    return () => map.setTarget(null!);
  });

  return (
    <ContentTemplate
      position='left'
      src={image}
      alt={translate('Barber shop image')}
    >
      <Form.Root submitHandler={props.submitHandler}>
        <div
          className='h-60 w-96 rounded-2xl'
          id='map-container'
          ref={mapRef}
        ></div>

        {/* <LocationInputFragment
          locationRef={props.locationRef}
          locationValue={props.locationValue}
          locationErrored={props.locationErrored}
          locationFilled={props.locationFilled}
          handleLocationFilled={props.handleLocationFilled}
        /> */}

        <NameInputFragment
          icon='barber'
          placeholder={translate('Barber shop name')}
          nameRef={props.nameRef}
          nameValue={props.nameValue}
          nameErrored={props.nameErrored}
          nameFilled={props.nameFilled}
          handleNameFilled={props.handleNameFilled}
        />

        <DescriptionInputFragment
          descriptionRef={props.descriptionRef}
          descriptionValue={props.descriptionValue}
          descriptionErrored={props.descriptionErrored}
          descriptionFilled={props.descriptionFilled}
          handleDescriptionFilled={props.handleDescriptionFilled}
        />

        <Form.Images
          file={props.file}
          fileUrl={props.fileUrl}
          setFile={props.setFile}
          setFileUrl={props.setFileUrl}
          handleChange={props.handleChange}
        />

        <Form.TwoRadio
          isOpenAtNight={props.isOpenAtNight}
          setIsOpenAtNight={props.setIsOpenAtNight}
          isOpenOnWeekends={props.isOpenOnWeekends}
          setIsOpenOnWeekends={props.setIsOpenOnWeekends}
        />

        <Button type='submit' isButtonDisabled={props.isButtonDisabled}>
          {translate('Register')}
        </Button>
      </Form.Root>

      <BackToLogon />
    </ContentTemplate>
  );
}
