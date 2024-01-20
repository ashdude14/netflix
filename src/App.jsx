import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginForm";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="scrollbar-hide">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ash" element={<Footer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
