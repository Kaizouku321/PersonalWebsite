import React from 'react';
import About from './components/about';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';
import P5Sketch from './components/P5Sketch';
import WebLink from './components/projectslink'
import "./App.css"; // Make sure your CSS file has the correct path

function App() {
  return (
    <>
      <div className="p5Background">
        <P5Sketch />
      </div>
      <div>
        <About />
        <WebLink />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
