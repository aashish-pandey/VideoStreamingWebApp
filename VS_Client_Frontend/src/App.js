
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
import PermissionDenied from './pages/PermissionDenied';

function App() {

  const [email, setEmail] = useState(getCookies('uemail'))

  const ProtectedRoute = ({children})=>{

    if(getCookies('loginStatus') == 'false'){
      return <Navigate to="/landing"/>;
    }

    return children;
  }

  const PermissionRoute = ({children})=>{
    if(getCookies('permissionDenied') == 'true'){

      return <Navigate to="/permissionDenied"/>;
    }
    return children;
  }

  useEffect(()=>{
  }, [])

    return (
      <div className="App">

        
  
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
          path='/permissionDenied'
          element={
            <PermissionDenied/>
            }
          />

          <Route
          path='/watch/:id'
          element={
          <ProtectedRoute>
            <PermissionRoute>
            <PlayVideo/>
            </PermissionRoute>
          </ProtectedRoute>
            }
          />
  
          <Route
          path='/homefeed'
          element={
          <ProtectedRoute>
            <PermissionRoute>
            <HomeFeed/>
            </PermissionRoute>
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
