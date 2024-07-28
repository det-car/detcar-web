import { SquareMenu, ReceiptText } from 'lucide-react';


const Header = () => {
    return (
        <div className="h-[4rem] bg-slate-600 flex">
            <SquareMenu className="h-full w-full"/>
            <ReceiptText />
        </div>
    )
}

export default Header