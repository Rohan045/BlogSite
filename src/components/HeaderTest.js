import "../css/HeaderTest.css";
import { Link } from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CallIcon from '@mui/icons-material/Call';
const HeaderTest = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg">
          <div className="container-fluid">
            <div className="logo">BlogSite.com</div>  
            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <nav className="shift">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/codingtab"><CodeIcon/> Coding</Link></li>
                    <li><Link to="/entertainment"><MovieIcon/> Entertainment</Link></li>
                    <li><Link to="/wildlife"><PetsIcon/> WildLife</Link></li>
                    <li><Link to="/photography"><CameraAltIcon/> Photography</Link></li>
                    <li><Link to="/contactus"><CallIcon/> Contact Us</Link></li>
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