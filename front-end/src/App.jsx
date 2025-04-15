import './App.scss';
import { Routes , Route } from "react-router-dom";



import Index from './view/Index';
import Footer from './components/Footer';
import SignIn from './view/SignIn';
import User from './view/User';


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
        <Route path='/profile' element={<User />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;