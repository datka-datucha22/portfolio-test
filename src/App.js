import './App.css';
import './reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Boxes from './Components/Boxes'
import Header from './Components/Header/Header';
import Home from './Components/body/home/Home';
import About from './Components/body/about/About';
import Contact from './Components/body/contact/Contact';
import Work from './Components/body/works/Work';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Boxes />
        <Routes>
          <Route path="/portfolio-test" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="/portfolio-test/about" element={<About />} />
            <Route path="/portfolio-test/contact" element={<Contact />} />
            <Route path="/portfolio-test/work" element={<Work />} />



          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
