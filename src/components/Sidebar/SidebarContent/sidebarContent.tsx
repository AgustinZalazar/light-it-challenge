import { FC, ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom";
import arrow from '../../../assets/arrow.svg'

interface Props {
    title: string,
    goBack: boolean,
    prevContentTitle?: string,
    children: ReactNode
}

const SidebarContent: FC<Props> = ({ children, title, goBack, prevContentTitle }): JSX.Element => {
    const navigate = useNavigate();
    return (
        <div className="h-full relative bg-light_gray p-5">
            {goBack && <label className=" text-sm text-[#b6b5c2] cursor-pointer hover:text-dark_gray" onClick={() => navigate(-1)}> {prevContentTitle}</label>}
            <h2 className=" text-lg font-bold mb-3">{title}</h2>
            {children}
            <Link to='/' className="w-8 absolute top-2/4 right-[-22px] bg-light_gray py-4 rounded-md">
                <img className="rotate-90" src={arrow} alt="arrow" />
            </Link>
        </div>
    )
}

export default SidebarContent