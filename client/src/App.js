import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './hooks/authContext';
import { useSessionStorage } from './hooks/useSessionStorage';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';
import { OfferDetails } from './components/Details/OfferDetails';
import { OfferEdit } from './components/Edit/OfferEdit';
import { PrivateGuard } from './components/Guards/PrivateGuad';
import { PublicGuard } from './components/Guards/PublicGuard';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { AboutUs } from './components/Informations/AboutUs';


function App() {
  const [auth, setAuth] = useSessionStorage('session');

  return (

    <div className="App">
    <AuthContext.Provider value={{auth, setAuth}} >

     <Header />

     <Routes >

      <Route  element={<PrivateGuard />}> 
        <Route path='/create' element={ <Create />} />   
        <Route path='/instrument/edit/:id' element={ <OfferEdit />} />
        <Route path='/profile' element={<Profile />} />
      </Route>

      <Route element={<PublicGuard />}>
        <Route path='/register' element={<Register/> }/>
        <Route path="/login" element={  <Login /> } />
      </Route>

        <Route path="/" element={<Home />} />
        <Route path='/catalog' element={ <Catalog />} />
        <Route path='/catalog/:id' element={ <OfferDetails />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path="*" element={<NotFound />} />

     </Routes>

    </AuthContext.Provider>  

      <Footer />

    </div>
  );
}

export default App;
