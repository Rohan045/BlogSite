import "../css/HeaderTest.css";
import {useState} from 'react';
import CodeIcon from '@mui/icons-material/Code';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CallIcon from '@mui/icons-material/Call';
import MenuPop from "./popOver";

const HeaderTest = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
      <div>
        <MenuPop open = {open} id = {id} handleClose = {handleClose} anchorEl = {anchorEl}/>
        <nav className="navbar navbar-expand-lg navbar-light bg">
          <div className="container-fluid">
            <div className="logo">BlogSite.com</div>  
            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <nav className="shift">
                  <ul>
                    <li>Home</li>
                    <li aria-describedby={id} onClick={handleClick}><CodeIcon/> Coding</li>
                    <li><MovieIcon/> Entertainment</li>
                    <li><PetsIcon/> WildLife</li>
                    <li><CameraAltIcon/> Photography</li>
                    <li><CallIcon/> Contact Us</li>
                  </ul>
                </nav>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default HeaderTest;