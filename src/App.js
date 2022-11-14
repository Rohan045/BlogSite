import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import Footer from './components/Footer';
import HeaderTest from './components/Header';
import Home from './components/Home';
import CodingTab from './components/codingTab';
import Entertainment from './components/Entertainment';
import WildLife from './components/WildLife';
import Photography from './components/Photography';
function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderTest />
        <Routes>
          {/* <Route exact path="/" element={<Home/>} />
          <Route path="/codingtab" element={<CodingTab/>} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/wildlife" element={<WildLife/>} />
          <Route path="/photography" element={<Photography/>} />
          <Route path="/contactus" element={<h1>Busy call back later</h1>} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
