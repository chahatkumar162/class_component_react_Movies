import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favouite from './Components/Favouite';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' exact render={(props)=>(
          <>
            <Banner {...props}/>
            <Movies {...props}/>
          </>
        )}/>
    <Route path='/favourites' component={Favouite} />
    </Routes>
      {/* <Banner /> */}
      {/* <Movies /> */}
      {/* <Favouite /> */}
    </Router>  
    
  );
}

export default App;
