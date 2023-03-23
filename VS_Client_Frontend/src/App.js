
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
import CheckAccountAccessAuthorization from './pages/CheckAccountAccessAuthorization';
import Profile from './pages/Profile';
import Movies from './pages/Movies';
import Trending from './pages/Trending';
import GroupChat from './pages/chat/GroupChat';
import ForgetPassword from './pages/ForgetPassword';
import PlayBannerVideo from './components/moviedetails/PlayBannerVideo';

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
          path='/forgetPassword'
          element={<ForgetPassword/>}
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
          path='/profile'
          element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
            }
          />

          <Route
          path='/accountAccessAvailabilityCheck'
          element={
          <ProtectedRoute>
            <CheckAccountAccessAuthorization/>
          </ProtectedRoute>
            }
          />

          <Route
          path='/'
          element={
            <Landing/>
            }
          />

        <Route
          path='/permissionDenied'
          element={
            <PermissionDenied/>
            }
          />

<Route
          path='/watchBanner/:id'
          element={
          <ProtectedRoute>
            <PermissionRoute>
            <PlayBannerVideo/>
            </PermissionRoute>
          </ProtectedRoute>
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
          path='/moviesPage'
          element={
          <ProtectedRoute>
            <PermissionRoute>
            <Movies/>
            </PermissionRoute>
          </ProtectedRoute>
        }
          />

          <Route
          path='/trendingPage'
          element={
          <ProtectedRoute>
            <PermissionRoute>
            <Trending/>
            </PermissionRoute>
          </ProtectedRoute>
        }
          />

          <Route
          path='/chatPage'
          element={
          <ProtectedRoute>
            <PermissionRoute>
            <GroupChat/>
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
