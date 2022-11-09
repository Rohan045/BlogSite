import './App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import HeaderTest from './components/HeaderTest';
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
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/codingtab" component={CodingTab}></Route>
          <Route path="/entertainment" component={Entertainment}></Route>
          <Route path="/wildlife" component={WildLife}></Route>
          <Route path="/photography" component={Photography}></Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
