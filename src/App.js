import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

import "./styles/App.scss";
import "./styles/About.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Contact.scss";
import "./styles/Footer.scss";
import "./styles/Project.scss"; 
import "./styles/experience.scss"




function App() {
  return (
    <>
    <Header />

    <Home/>
    <div className='w-100% bg-black py-1' ></div>


    <About/>
    <div className='w-100% bg-black py-1' ></div>

    <Experience/>
    <div className='w-100% bg-black py-1' ></div>


    <Skills/>
    <div className='w-100% bg-black py-1' ></div>


    <Contact/>
    <div className='w-100% bg-black py-1' ></div>


    <Footer/>
    </>
  );
}

export default App;
