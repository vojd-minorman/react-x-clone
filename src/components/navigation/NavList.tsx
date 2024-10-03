import { Link } from 'react-router-dom';

interface NavListProps {
    images: string;
    text: string;
    to: string;
}

export default function NavList({ images, text, to }: NavListProps) {
    return (
        <li className='flex flex-row gap-3 items-center py-2'>
            <Link to={to} className='flex items-center w-full'>
                <div className=''>
                    <img src={images} alt={text} className="imgNav w-6"/>
                </div>
                <div className="ml-3">
                    <p>{text}</p> 
                </div>  
            </Link>
        </li>
    )
}