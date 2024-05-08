import logo from './assets/linda-logo.png';
import Introduction from './Introduction';
import Icons from './Icons';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <img src={logo} alt="linda-logo" className="logo" />
        < Introduction />
        < Navbar />
        < Icons />
    </div>
  );
}

export default App;
