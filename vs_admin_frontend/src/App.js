import { BrowserRouter, Route, Routes } from "react-router-dom";
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


//till here

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route     //here
          path="/asd"
          element={<Dashboard/>}
          />
        <Route
          path="/" //here
          element={<Login/>}
          />
          <Route
          path= '/reg'  //here
          element={<Register/>}
          />
         
          <Route
          path="/allUsers"
          element={<Allusers/>}
          />
          <Route
          path="/upload"
          element={<VideoUpload/>}
          />

          <Route
          path="/admins"
          element={<AllAdmins/>}
          />

          <Route
          path="/allMovies"
          element={<AllMovies/>}
          />

          <Route
          path="/subs"
          element={<AllSubscriptionPlans/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




