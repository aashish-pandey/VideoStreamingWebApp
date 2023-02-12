
import { useEffect, useState } from 'react';
import Cookies from 'react-cookie/cjs/Cookies';
import useCookies from 'react-cookie/cjs/useCookies';
import { isEdge } from 'react-device-detect';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PlayVideo from './components/moviedetails/PlayVideo';
import getCookies from './pages/CookieHandler';
import Home from './pages/Home';
import HomeFeed from './pages/HomeFeed';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SetPassword from './pages/SetPassword';
import VideoUpload from './pages/VideoUpload';
import './App.css'
import useOnlineStatus from '@rehooks/online-status';
import SessionTracker from './components/sessionManagement/SessionTracker';

function App() {

  const [email, setEmail] = useState(getCookies('uemail'))

  const ProtectedRoute = ({children})=>{

    if(getCookies('loginStatus') == 'false'){
      return <Navigate to="/landing"/>;
    }

    return children;
  }

  useEffect(()=>{
  }, [])

    return (
      <div className="App">

        <SessionTracker/>
  
        <BrowserRouter>
  
        <Routes>
          <Route
          path='/landing'
          element={<Landing/>}
          />
  
        <Route
          path='/setPassword'
          element={<SetPassword/>}
          />
  
          <Route
          path='/login'
          element={<Login/>}
          />
  
          <Route
          path='/home'
          element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
            }
          />

          <Route
          path='/'
          element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
            }
          />

          <Route
          path='/watch/:id'
          element={
          <ProtectedRoute>
            <PlayVideo/>
          </ProtectedRoute>
            }
          />
  
          <Route
          path='/homefeed'
          element={
          <ProtectedRoute>
            <HomeFeed/>
          </ProtectedRoute>
        }
          />

          <Route
          path='/upload'
          element={
            <VideoUpload/>
          }
          />
  
        </Routes>
        
        </BrowserRouter>
      </div>
    );


}

export default App;
