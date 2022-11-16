import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import ContactMe from './Contact Me/ContactMe';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

function App() {
  return <div>

    <NavBar />

    {/* <br/>
    <br/>
    <br/> */}

    <Header />
    {/* <br/>
    <br/>
    <br/> */}

    <Portfolio />

    {/* <br/>
    <br/>
    <br/> */}

    <About/>


    {/* <br/>
    <br/>
    <br/> */}

    <ContactMe />

    {/* <br/>
    <br/>
    <br/> */}

    <Footer />


  </div>


  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
