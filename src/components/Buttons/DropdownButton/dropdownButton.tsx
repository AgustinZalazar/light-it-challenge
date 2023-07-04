import { Popover } from '@headlessui/react'
import { FC } from 'react'
import arrow from '../../../assets/arrow.svg'

interface Props {
    text: string
}

const DropdownButton: FC<Props> = ({ text }): JSX.Element => {

    return (
        <Popover className="relative">
            <Popover.Button className='flex items-center gap-4 bg-white p-3 rounded-md'>
                <p className='relative after:block after:absolute after:inset-0 after:left-28 after:w-[1px] after: after:bg-[#d9d9dd]'>{text}</p>
                <img className='w-6 ' src={arrow} />
            </Popover.Button>
            <Popover.Panel className="absolute z-10">
                <div className="flex flex-col gap-3 bg-white rounded-md mt-2 py-2 px-2">
                    <p className='cursor-pointer hover:font-semibold' onClick={() => console.log('Guardar y salir fue clickeado')}>Guardar y salir</p>
                    <p className='cursor-pointer hover:font-semibold' onClick={() => console.log('Salir sin guardar fue clickeado')}>Salir sin guardar</p>
                    <p className='cursor-pointer hover:font-semibold' onClick={() => console.log('Guardar y continuar fue clickeado')}>Guardar y continuar</p>
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export default DropdownButton