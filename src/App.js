import Container from './components/Container/Container.js';
import Hero from './components/Hero/Hero.js'
import SearchForm from './components/SearchForm/SearchForm.js'
import List from './components/List/List.js'
import NavBar from './components/NavBar/NavBar.js';


const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};

export default App;
