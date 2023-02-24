import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


const App = () => {

  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
