
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mynotes from './screens/MyNotes/MyNotes';
import LoginScreen from "./screens/LoginScreen/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen.js";
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/SingleNote';
import { useState } from "react";
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)}/>
     
      
      <main style={{minHeight:"93vh"}} className="App">
      <Routes>
      <Route path="/"  element={<LandingPage/>} exact />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/profile" element={<ProfileScreen/>} />
      <Route path="/register" element={<RegisterScreen/>} />
      <Route path="/mynotes" element={<Mynotes search={search}/>}  />
      <Route path="/note/:id" element={<SingleNote/>} exact />
      <Route path="/createnote" element={<CreateNote/>} exact />
      </Routes>
      
      </main>
      
      <Footer />
     
     
     
     </Router>
  );
}


export default App;
