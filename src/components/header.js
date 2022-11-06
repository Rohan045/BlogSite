import '../css/header.css';
import {useEffect, useState} from 'react';

function Header(){
    const [color,setColor] = useState(0);
    const colors = ["white","green","red","purple","yellow"];
    const changeColor = () => {
        setColor((color + 1) % colors.length);
    }
    return(
        <>
        <div className='header-body'>
            <div className='logo' style={{color : `${colors[color]}`}} onClick={changeColor}>
                BlogSite.com
            </div>
            <div>
                Entertainment | Wildlife | Photography | Coding
            </div>
        </div>
        </>
    );
}

export default Header;
