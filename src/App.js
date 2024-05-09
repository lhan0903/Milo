import logo from './assets/linda-logo.png';
import Introduction from './Introduction';
import Icons from './Icons';
import Navbar from './Navbar';
import WorkExperience from './WorkExperience';

function App() {
  return (
    <div className="App">
        <img src={logo} alt="linda-logo" className="logo" />
        < Introduction />
        < Navbar />
        <h3 className="message">🚧 This page is currently under construction 🚧</h3>
        < Icons />
        < WorkExperience />
    </div>
  );
}

export default App;
