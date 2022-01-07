import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
      <div className="App">
      <Router>
        <div className="App h-screen">
          
          <Routes>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/insight">
              <Insight />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route> */}
           
            <Route path="/" element={<Home/>}/>
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
