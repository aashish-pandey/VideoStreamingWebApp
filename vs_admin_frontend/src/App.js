import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllAdmins from "./pages/AllAdmins";
import AllMovies from "./pages/AllMovies";
import AllSubscriptionPlans from "./pages/AllSubscriptionPlans";
import Allusers from "./pages/Allusers";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
          path= '/'
          element={<Register/>}
          />
          <Route
          path="/login"
          element={<Login/>}
          />
          <Route
          path="/allUsers"
          element={<Allusers/>}
          />

          <Route
          path="/allAdmins"
          element={<AllAdmins/>}
          />

          <Route
          path="/allMovies"
          element={<AllMovies/>}
          />

          <Route
          path="/allSubscriptionPlans"
          element={<AllSubscriptionPlans/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
