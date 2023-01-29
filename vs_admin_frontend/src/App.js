import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllAdmins from "./pages/AllAdmins";
import AllMovies from "./pages/AllMovies";
import AllSubscriptionPlans from "./pages/AllSubscriptionPlans";
import Allusers from "./pages/Allusers";
import Login from "./pages/Login";
import Register from "./pages/Register";

//i was here
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Dashboard from "./pages/Dashboard";
import VideoUpload from "./pages/UploadMovie";
import { useContext, useEffect } from "react";
import { LoginContext } from "./context/LoginContext";
import getCookies from "./cookieHandler/CookieHandler";


//till here

function App() {

  const loginStatus = getCookies("isLogged")

  useEffect(()=>{
    console.log(loginStatus)
  }, [])

  const ProtectedRoute = ({children})=>{
<<<<<<< HEAD
=======
    console.log(loginStatus)
>>>>>>> 79a94fb5a68128331d0c5d5bde460e6d067f27e7
    if(loginStatus != 'true'){
      return <Navigate to = "/login"/>
    }else{
      return children
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route     //here
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
        }
          />
        <Route
          path="/login" //here
          element={<Login/>}
          />
          <Route
          path= '/reg'  //here
          element={<ProtectedRoute>
            <Register/>
          </ProtectedRoute>}
          />
         
          <Route
          path="/allUsers"
          element={<ProtectedRoute><Allusers/></ProtectedRoute>}
          />
          <Route
          path="/upload"
          element={<ProtectedRoute><VideoUpload/></ProtectedRoute>}
          />

          <Route
          path="/admins"
          element={<ProtectedRoute><AllAdmins/></ProtectedRoute>}
          />

          <Route
          path="/allMovies"
          element={<ProtectedRoute><AllMovies/></ProtectedRoute>}
          />

          <Route
          path="/subs"
          element={<ProtectedRoute><AllSubscriptionPlans/></ProtectedRoute>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




