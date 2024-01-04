'use client';

import { useCoordinatesStore } from '@/lib/coordinatesStore';
import { Bar } from '@/lib/directus';

export default function BarCard({ bar }: { bar: Bar }) {
    const { moveCoordinates, showPopup } = useCoordinatesStore();

    const moveAndShowPopup = () => {
        moveCoordinates({ latitude: bar.location.coordinates[1], longitude: bar.location.coordinates[0], zoom: 15 });
        showPopup({
            coordinates: { latitude: bar.location.coordinates[1], longitude: bar.location.coordinates[0] },
            title: bar.name,
            address: bar.address,
        });
    };

    return (
        <div className="flex justify-between rounded-lg bg-card p-8">
            <div className="flex flex-col">
                <h2 className="font-bold">{bar.name}</h2>
                <p className="text-primary">{bar.address}</p>
            </div>
            <button className="w-16 h-16 rounded-full cursor-pointer bg-primary" onClick={moveAndShowPopup}>
                👁️
            </button>
        </div>
    );
}
