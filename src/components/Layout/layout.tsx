import { FC, ReactNode } from "react"
import { Navbar } from '..'
import plus from '../../assets/+.png'
import dash from '../../assets/-.png'
import arrow from '../../assets/Flecha.png'

interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className="h-screen relative bg-gray">
            <Navbar />
            {children}
            <button onClick={() => console.log('Boton fijar clickeado')} className="min-w-[105px] absolute top-32 right-40 bg-white hover:bg-light_gray px-8 py-3 rounded-lg">Fijar</button>
            <button onClick={() => console.log('Boton borrar clickeado')} className="min-w-[105px] absolute top-32 right-8 bg-white hover:bg-light_gray px-8 py-3 rounded-lg">Borrar</button>
            <div className="absolute bottom-2 right-32 bg-white px-2 py-3 rounded-lg">
                <img className="cursor-pointer mb-3" onClick={() => console.log('Boton mas clickeado')} src={plus} width={20} />
                <img className="cursor-pointer" onClick={() => console.log('Boton menos clickeado')} src={dash} width={20} />
            </div>
            <div className="absolute flex items-center flex-col bottom-2 right-8 bg-white px-2 py-3 rounded-lg">
                <img className="cursor-pointer" onClick={() => console.log('Boton flecha para arriba clickeada')} src={arrow} width={20} />
                <div className="flex gap-4">
                    <img className="cursor-pointer rotate-[-90deg]" onClick={() => console.log('Boton flecha para la izquierda clickeada')} src={arrow} width={20} />
                    <img className="cursor-pointer rotate-90" onClick={() => console.log('Boton flecha para la derecha clickeada')} src={arrow} width={20} />
                </div>
                <img className="cursor-pointer rotate-180" onClick={() => console.log('Boton flecha para abajo clickeada')} src={arrow} width={20} />
            </div>
        </div>
    )
}

export default Layout