import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    text: string
    image: string,
    width?: number
}

const SidebarItem: FC<Props> = ({ text, image, width }): JSX.Element => {
    return <Link to={`/${text.toLocaleLowerCase()}`} className='flex justify-center flex-col items-center mb-4'>
        <img src={image} width={width} />
        <p className='text-xs'> {text} </p>
    </Link>
}

export default SidebarItem