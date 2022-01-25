import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Property from "./pages/Property";
import SignIn from "./pages/SignIn";
import SignUs from "./pages/SignUp";
import PropertyOverview from "./Component/PropertOverview";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/property" element={<Property />} />
          <Route exact path="/property/:action/:category/:id" element={<PropertyOverview />} />
          
          <Route exact path="/sign-in" element={<SignIn/>}/>
          <Route exact path="/sign-us" element={<SignUs/>}/>
    
        </Routes>
      </Router>
    </>
  );
}

export default App;
