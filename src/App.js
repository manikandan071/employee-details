import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sign from './components/form/sign';
import Login from './components/form/login';
import Home from './components/home/home';
import Profile from './components/profile/profile';

function App() {
  const state = useSelector((data)=>data.sample)
  console.log(state);
  return (
      <BrowserRouter>
      {
        state?.isAuthentication?(
            state?.loginAuthentication?(
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='Profile' element={<Profile />}/>
              </Routes>
            ):(
              <Routes>
                <Route path='/' element={<Login />}/>
              </Routes>
            )
          
          
        ):(
          <Routes>
            <Route path='/' element={<Sign />}/>
          </Routes>
        )
      }
        
      </BrowserRouter>
  );
}

export default App;
