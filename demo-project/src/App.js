import './App.css';
import Nav from './Nav'
import HeroForm from "./HeroForm";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HeroList from "./HeroList";
function App() {
  return (

      <div>

          <Nav />
          <HeroForm />
          <div className="App">

              <HeroList />

          </div>

      </div>

  );
}

export default App;
