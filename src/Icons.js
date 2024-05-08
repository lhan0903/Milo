import linkedin from './assets/icon-linkedin.png';
import github from './assets/icon-github.png';
import email from './assets/icon-email.png';

const Icons = () => {
  return (
    <div className="iconRow">
      <a href="https://www.linkedin.com/in/linda-jianing-han/" target="_blank"><img src={linkedin} alt="linkedin icon" /></a>
      <a href="https://github.com/lhan0903" target="_blank"><img src={github} alt="github icon" /></a>
      <a href="mailto: hanlinda0903@gmail.com" target="_blank"><img src={email} alt="email icon" /></a>
    </div>
  );
}
 
export default Icons;
