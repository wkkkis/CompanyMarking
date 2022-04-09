import Header from '../src/components/Header';
import Help from '../src/components/Help'
import Equipment from '../src/components/Equipment'
import Footer from '../src/components/Footer'
import Main from '../src/components/Main'
import Application from "./components/Application";
import Industries from '../src/components/Industries'
import Projects from '../src/components/Projects'
import Marking from '../src/components/Marking'
import Orders from '../src/components/Orders'
import './media.scss'
import './App.scss';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Application/>
     <Industries/>
     <Projects/>
     <Marking/>
     <Orders/>
     <Help/>
     <Equipment/>
     <Footer/>
    </div>
  );
}

export default App;
