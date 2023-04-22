import Image from 'next/image'
import '../styles/globals.css'

export function Grid(props) {
    return (
        <>
            <div className={`grid ${props.sm} ${props.md} ${props.lg} ${props.xl} ${props.styled}`}>
                {props.children}
            </div>
        </>
    );
}

export function Card(props) {
    return (
        <>
            <div className="hover:cursor-pointer">
                <div className='h-full rounded-md bg-neutral-900'>
                    <div>
                        <Image alt="Imagen de cartas" src={props.Url} width={350} height={250} priority className="w-full rounded-t-md" />
                    </div>
                    <div className="px-2 py-2">
                        <header className="flex items-center justify-start">
                            <div className="w-full text-left">
                                <h2 className="flex flex-row items-center justify-between text-sm font-bold text-neutral-200">{props.Title}</h2>
                            </div>
                        </header>
                        <p className="text-sm text-neutral-200">
                            {props.Subtitle}
                        </p>
                    </div>
                    <footer className="flex items-center justify-between px-1 py-1">
                        <div className="flex items-center gap-x-1">
                            <Image src={props.Avatar} width={14} height={14} alt="Avatar developer" className="inline-block h-14 w-14 rounded-full p-1" />
                            <span className="inline-flex items-center rounded bg-indigo-900 px-2 py-0.5 text-xs font-medium text-white">{props.Name}</span>
                        </div>
                        <span className="inline-flex items-center rounded bg-zinc-700 px-2 py-0.5 text-xs font-medium text-white">{props.Date}</span>
                    </footer>
                </div>
            </div>
        </>
    );
}


module.exports = {
    Grid,
    Card
}