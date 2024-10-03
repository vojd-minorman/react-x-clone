
interface NavListProps{
    images : string,
    text : string,
}

export default function NavList(props:NavListProps) {
    return (
    <li className='flex flex-row gap-3 items-center py-2'>
        <div className=''>
            <img src={props.images} alt="Rien" className="imgNav w-6"/>
        </div>
        <div>
          <p>{props.text}</p> 
        </div>  
    </li>
    )
}