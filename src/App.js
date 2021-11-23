import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={(e) => {
            e.preventDefault()
            // eslint-disable-next-line no-undef
            gtag('event', 'click', {
              'event_category': 'home',
              'event_label': 'Link to React Website'
            })
            window.location.href = 'https://reactjs.org/'
        }}
          className="App-link"
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
