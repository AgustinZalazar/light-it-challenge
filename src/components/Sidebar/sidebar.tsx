import { FC, ReactNode } from "react"
import { SidebarItem } from './SidebarItem'
import Aberturas from '../../assets/menu-images/Aberturas.png'
import Equipamiento from '../../assets/menu-images/Equipamiento.png'
import Terminaciones from '../../assets/menu-images/Terminaciones.png'

interface Props {
    children?: ReactNode
}

const Sidebar: FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className='h-[88.5%] flex'>
            <div className=' w-max  flex flex-col justify-center bg-white p-2'>
                <SidebarItem text='Aberturas' image={Aberturas} width={40} />
                <SidebarItem text='Equipamiento' image={Equipamiento} width={40} />
                <SidebarItem text='Terminaciones' image={Terminaciones} width={40} />
            </div>
            {children}
        </div>
    )
}

export default Sidebar