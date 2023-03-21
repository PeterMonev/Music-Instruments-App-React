import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className="App">
     <Header />

      
     <Routes >
     <Route path="/" element={<Home />} />
     <Route path='/register' element={<Register/> }/>
     <Route path="/login" element={  <Login /> } />

     
     </Routes>
     

      <Footer />

    </div>
  );
}

export default App;
