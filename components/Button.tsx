export default function Button(props: { children: string; gradient?: boolean }) {
    return (
        <button className={`bg-primary text-white font-bold py-2 px-4 rounded-lg ${props.gradient ? 'bg-gradient-to-r to-primary from-[#c20dc5]' : ''}`}>
            {props.children}
        </button>
    );
}
