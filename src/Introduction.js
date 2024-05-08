import { ReactTyped } from "react-typed";


const Introduction = () => {
  return ( 
    <div className="introduction">
      <h1 className="intro-title">
        👋 {''}
        <ReactTyped strings={["Hi, I'm Linda"]} typeSpeed={120} loop backSpeed={60} />
      </h1>
      <br></br>
      <p>A third year computer science student at UBC who loves exploring new technology💻, 
        eating chili🥫, and going on outdoor adventures⛰️! When I'm not coding, 
        you'll find me <a href="/">baking</a>, gaming, and capturing silly photos of my cat <a href="/">Milo</a> 🐈. </p>
    </div>
  );
}
 
export default Introduction;