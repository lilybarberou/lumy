import { createDirectus, login, rest } from '@directus/sdk';

export type Bar = {
    id: number;
    name: string;
    location: { type: string; coordinates: number[] };
    place_id: string;
    rating: string;
    address: string;
    status: string;
    formatted_phone_number: string;
    international_phone_number: string;
    maps_url: string;
    user_ratings_total: number;
    opening_hours: string;
    website: string;
    category: number[];
    type: number[];
};

export type Collections = {
    bars: Bar[];
};

const directus = createDirectus<Collections>('https://app.brest.bar/').with(rest());
// directus.request(login('test@lumy.bzh', 'password'));

export default directus;
