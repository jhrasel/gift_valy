import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './Pages/Home';
import './Style.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thankyou from "./Pages/Thankyou";


function App() {



  return (
    

    <>
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/thankyou/:id_Number"  element={<Thankyou />}></Route>

      </Routes>

    </BrowserRouter>

    </>


  );


}

export default App;
