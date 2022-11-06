import '../css/header.css';
import {useState} from 'react';

function Header(){
    const [color,setColor] = useState(0);
    const colors = ["white","green","red","purple","yellow"];
    const changeColor = () => {
        setColor((color + 1) % colors.length - 1);
    }
    return(
        <>
        <div className='header-body'>
            <div className='logo' style={{color : `${colors[color]}`}}>
                BlogSite.com
            </div>
            <p>Hello World!!</p>
            <div className='button'>
                <h1><button onClick={changeColor}>Press</button></h1>
            </div>
        </div>
        </>
    );
}

export default Header;
