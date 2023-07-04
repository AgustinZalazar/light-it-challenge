import { FC } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../../../assets/activo.png'

interface Props {
    text: string,
    url: string
}

const ItemContent: FC<Props> = ({ text, url }): JSX.Element => {
    return (
        <Link to={url} className='w-[400px] flex justify-between items-center bg-white mb-3 py-3 px-5 rounded-lg hover:bg-gray' >
            {text}
            <img src={Arrow} width={10} className='rotate-180 h-4' />
        </Link>
    )
}

export default ItemContent