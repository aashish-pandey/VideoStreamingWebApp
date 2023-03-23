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
import { useEffect } from "react";
import getCookies from "./cookieHandler/CookieHandler";
import UploadSeries from "./pages/UploadSeries";
import EditAdmins from "./pages/EditAdmins";
import EditMovies from "./pages/EditMovies";
import Banner from "./pages/Banner";

// import Incorrect from "./pages/Incorrect";


//till here

function App() {

  var loginStatus = getCookies("isLogged")

  useEffect(()=>{
    console.log(loginStatus)
  }, [])

  const ProtectedRoute = ({children})=>{
    loginStatus = getCookies("isLogged")
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
          
<Route path="/ban"
element={<ProtectedRoute><Banner/></ProtectedRoute>}
></Route>
          <Route
          path="/sdfg"
          element={<ProtectedRoute><UploadSeries/></ProtectedRoute>}
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
          path="/EditAdmins"
          element={<ProtectedRoute><EditAdmins></EditAdmins></ProtectedRoute>}
          />

<Route
          path="/EditMovies"
          element={<ProtectedRoute><EditMovies></EditMovies></ProtectedRoute>}
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




