import Button from './Button';
import ModalAddBar from './ModalAddBar';

export default function Navigation() {
    return (
        <nav className="p-4 flex justify-between items-center shadow-xl">
            <div className="flex text-2xl gap-2 items-center">
                🍻
                <p className="flex gap-2">
                    Brest
                    <span className="bg-gradient-to-r from-primary to-[#c20dc5] inline-block text-transparent bg-clip-text">bar</span>
                </p>
            </div>
            <ModalAddBar />
        </nav>
    );
}
