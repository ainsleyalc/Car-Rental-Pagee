import logo from './logo.svg';
import './App.css';
import NavBar from './Componts/NavBar'
import Home from './Componts/Home';

function App() {
  return (
    <div  className='whole-container '>

      <div  className='first-div ' >
        <NavBar />
      </div>
    <div  className='img-div'>
       <Home />
    </div>
   




    </div>

  );
}

export default App;
