import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import DropdownButton from '../Buttons/DropdownButton/dropdownButton'

const Navbar = () => {
    return (
        <nav className='w-full flex justify-between px-24 py-6 bg-dark_gray'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <DropdownButton text='Guardar y salir' />
        </nav>
    )
}

export default Navbar