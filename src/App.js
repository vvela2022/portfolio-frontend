import './App.css';

//IMPORT COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

import {Route, Routes} from 'react-router-dom'

//IMPORT PAGES
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
const URL = 'https://portfolio-vv.herokuapp.com/'

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About URL={URL} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
