import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SQLInjection from "./pages/SQLInjection";
import XSS from "./pages/XSS";
import ExploreLabs from "./pages/ExploreLabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeaturesPage from "./pages/FeaturesPage";
import Toolkit from "./pages/ToolKit";
import PasswordStrength from "./components/toolkit/PasswordStrength";
import PasswordGenerator from "./components/toolkit/PasswordGenerator";
import HashGenerator from "./components/toolkit/HashGenerator";
import JWTDecoder from "./components/toolkit/JWTDecoder";
import JWT from "./pages/JWT";
import CSRF from "./pages/CSRF";
import FileUpload from "./pages/FileUpload";
import ProtectedRoute from "./components/ProtectedRoute";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/about" element={<About />} />

      <Route path="/features" element={<FeaturesPage />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/explore" element={<ExploreLabs />} />

      <Route path="/toolkit" element={<Toolkit />} />

      <Route path="/toolkit/password-strength" element={<PasswordStrength />} />
      
      <Route path="/toolkit/password-generator" element={<PasswordGenerator />} />
      
      <Route path="/toolkit/hash-generator" element={<HashGenerator />} /> 
      
     <Route path="/toolkit/jwt-decoder" element={<JWTDecoder />} /> 



      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/labs/sql-injection"
        element={
          <ProtectedRoute>
            <SQLInjection />
          </ProtectedRoute>
        }
      />

      <Route
  path="/xss"
  element={
    <ProtectedRoute>
      <XSS />
    </ProtectedRoute>
  }
/>
<Route path="/jwt" element={<JWT />} />

<Route path="/csrf" element={<CSRF />} />

<Route path="/file-upload" element={<FileUpload />} />

<Route path="/certificate" element={<Certificate />} />

    </Routes>
  );
}

export default App;