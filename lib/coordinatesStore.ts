import { create } from 'zustand';

type Store = {
    coordinates: {
        longitude: number;
        latitude: number;
        zoom: number;
    };
    moveCoordinates: (obj: { longitude: number; latitude: number; zoom: number }) => void;
    popup: {
        show: boolean;
        coordinates: {
            longitude: number;
            latitude: number;
        };
        title: string;
        address: string;
    };
    showPopup: (obj: { coordinates: { longitude: number; latitude: number }; title: string; address: string }) => void;
    closePopup: () => void;
};

export const useCoordinatesStore = create<Store>((set) => ({
    coordinates: {
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
    },
    popup: {
        show: false,
        coordinates: {
            longitude: 0,
            latitude: 0,
        },
        title: '',
        address: '',
    },
    showPopup: ({ coordinates, title, address }) =>
        set((state) => ({
            popup: {
                show: true,
                coordinates,
                title,
                address,
            },
        })),
    closePopup: () =>
        set((state) => ({
            popup: {
                ...state.popup,
                show: false,
            },
        })),
    moveCoordinates: ({ longitude, latitude, zoom }) =>
        set((state) => ({
            coordinates: {
                ...state.coordinates,
                longitude,
                latitude,
                zoom,
            },
        })),
}));
