import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js'
import Favorite from './components/Favorite/Favorite.js'
import { Routes, Route} from 'react-router-dom'
import WrongAddress from './components/WrongAddress/WrongAddress.js';


const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/favorite" element={<Favorite />} />
          <Route path="*" element={<WrongAddress />}/>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
