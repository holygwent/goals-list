import {type ReactNode} from 'react'
interface HeaderProps{
    img:{
        alt:string;
        src:string;
    }
    children:ReactNode
}

const Header = ({img,children}:HeaderProps) =>{
    return(
        <header>
            <img {...img}/>
            <h1>{children}</h1>
        </header>
    );
}
export default Header;