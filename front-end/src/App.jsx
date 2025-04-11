import './App.scss';
import { Routes , Route } from "react-router-dom";

/*
**<Route path='/login' element={<SignIn />} />
<Route path='/profile' element={<User />} /> 
*/

import Index from './views/Index';
import Footer from './components/footer/Footer';

//import SignIn from './views/Signin/SignIn';
//import User from './views/User/User'


/**
 * Creates App component
 * @returns { HTMLElement }
 */
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;