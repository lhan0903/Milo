import logo from './assets/linda-logo.png';
import Introduction from './Introduction';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <img src={logo} alt="linda-logo" className="logo" />
        < Introduction />
      </div>
    </div>
  );
}

export default App;
