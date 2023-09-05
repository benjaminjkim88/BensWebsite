import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Projects from "./components/Projects"
import Bio from './components/Bio';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="all-bio">
        <Bio />
        <Projects />
      </div>
    </div>
  );
}

export default App;
