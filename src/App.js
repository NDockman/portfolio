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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
