import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Bio from "./components/Bio";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">

      <Header />
      <Bio />
      <Project />
      <Contact />

      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
