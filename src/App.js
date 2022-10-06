import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './Pages/Home';
import './Style.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    

    <>
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}></Route>

      </Routes>

    </BrowserRouter>

    </>


  );


}

export default App;
