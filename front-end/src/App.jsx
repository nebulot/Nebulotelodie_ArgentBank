import './App.scss';
import { Routes , Route } from "react-router-dom";



/*
**
<Route path='/profile' element={<User />} /> 
*/

import Index from './view/Index';
import Footer from './components/Footer';
import SignIn from './view/SignIn';


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
        <Route path='/login' element={<SignIn />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;