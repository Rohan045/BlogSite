import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CodingTab from './components/codingTab';
// import Footer from './components/Footer';
import HeaderTest from './components/Header';
function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderTest />
        <Routes>
          <Route path="/dynamicprogramming" element={<CodingTab/>} />          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
