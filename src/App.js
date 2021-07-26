import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { async } from 'q';

function App() {
 async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager});
  }
  return (

    <div className="App">
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
