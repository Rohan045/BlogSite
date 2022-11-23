import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CodingTab from './components/codingTab';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dynamicprogramming" element={<CodingTab/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
