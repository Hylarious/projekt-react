import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';


const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default App;
