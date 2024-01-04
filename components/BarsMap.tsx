'use client';

import { useCoordinatesStore } from '@/lib/coordinatesStore';
import { Bar } from '@/lib/directus';
import { useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

export default function BarsMap(props: { bars: Bar[] }) {
    const { coordinates, moveCoordinates, popup, closePopup, showPopup } = useCoordinatesStore();

    useEffect(() => {
        const success = (pos: GeolocationPosition) => {
            const crd = pos.coords;
            moveCoordinates({ longitude: crd.longitude, latitude: crd.latitude, zoom: 15 });
        };

        const error = (err: GeolocationPositionError) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, [moveCoordinates]);

    const moveMap = (coord: { longitude: number; latitude: number }) => {
        moveCoordinates({ longitude: coord.longitude, latitude: coord.latitude, zoom: 15 });
    };

    const moveAndShowPopup = (bar: Bar) => {
        moveMap({ longitude: bar.location.coordinates[0], latitude: bar.location.coordinates[1] });
        showPopup({
            coordinates: { latitude: bar.location.coordinates[1], longitude: bar.location.coordinates[0] },
            title: bar.name,
            address: bar.address,
        });
    };

    return (
        <div>
            <Map
                {...coordinates}
                onMove={(evt) => moveCoordinates({ longitude: evt.viewState.longitude, latitude: evt.viewState.latitude, zoom: evt.viewState.zoom })}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/theocouss/ckvwk5n9n505t14plpavfbb21"
                maxZoom={20}
                minZoom={3}
                style={{ width: '100%', height: '100%', overflow: 'hidden' }}
            >
                {popup.show && (
                    <Popup longitude={popup.coordinates.longitude} latitude={popup.coordinates.latitude} anchor="bottom" onClose={closePopup}>
                        <p className="text-black">{popup.title}</p>
                        <p className="text-black">{popup.address}</p>
                    </Popup>
                )}
                {props.bars.map((bar) => (
                    <Marker
                        onClick={() => moveAndShowPopup(bar)}
                        key={bar.id}
                        latitude={bar.location.coordinates[1]}
                        longitude={bar.location.coordinates[0]}
                    ></Marker>
                ))}
            </Map>
        </div>
    );
}
