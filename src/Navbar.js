import resume from './assets/Linda_Han_Resume.pdf';

const Navbar = () => {
  const openResume = () => {
    window.open(resume, '_blank');
  };

  return ( 
    <div className="navbar">
      <button type="button" className="btn btn-block">Work Experience</button>
      <button type="button" className="btn btn-block">My Projects</button>
      <button type="button" className="btn btn-block" onClick={openResume}>Resume</button>
    </div>
  );
}

export default Navbar;