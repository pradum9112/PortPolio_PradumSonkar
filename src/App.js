import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Certificates/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
