import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Summarizer from "./Components/Summarizer";
import Summarizer1 from "./Components/Summarizer1";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Summarizer />
      <Summarizer1 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
