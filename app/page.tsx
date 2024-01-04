import BarCard from '@/components/BarCard';
import BarsMap from '@/components/BarsMap';
import Button from '@/components/Button';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default async function Home() {
    const bars = await directus.request(readItems('bars', { limit: 10 }));

    const types = [
        { label: 'Cave', icon: '🍷' },
        { label: 'Brasserie', icon: '🍺' },
        { label: 'Bar', icon: '🍹' },
    ];

    return (
        <main className="max-h-[calc(100svh_-_72px)] grid grid-cols-[minmax(200px,_700px)_2fr]">
            <div className="max-h-[calc(100svh_-_72px)] overflow-y-auto">
                <div className="mb-1 pb-4 border-b border-b-[#434343]">
                    <h1 className="px-4 text-3xl font-bold">
                        Trouver le bar qu&apos;il vous faut{' '}
                        <span className="bg-gradient-to-r from-primary to-[#c20dc5] inline-block text-transparent bg-clip-text">selon votre humeur</span>
                    </h1>
                </div>
                <div className="mb-4 p-4 pb-4 border-b border-b-[#434343]">
                    <p className="mb-6 text-2xl font-bold">Où boire à Brest ?</p>
                    <div className="mb-4 grid grid-cols-3 gap-10">
                        {types.map((type) => (
                            <div key={type.label} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square rounded flex justify-center items-center text-3xl bg-card">
                                    <p>{type.icon}</p>
                                </div>
                                <p>{type.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="px-4 mb-6 flex justify-between items-center">
                    <p className="text-2xl font-bold">Explorer</p>
                    <Button gradient={true}>Filtrer ✍️</Button>
                </div>
                <div className="flex flex-col gap-4">
                    {bars.map((bar) => (
                        <BarCard key={bar.id} bar={bar} />
                    ))}
                </div>
            </div>
            <BarsMap bars={bars} />
        </main>
    );
}
