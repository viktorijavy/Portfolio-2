import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const App = () => {

  return (
    <div>
     <Navbar/>
     <Main/>
     
     <hr />
     
     <About/>
     <hr />
     <Skills/>
     <hr />
     <Projects/>
    </div>
  );
}

export default App;
