import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Booking from './components/Booking/Booking/Booking';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Packages from './components/Home/Packages/Packages';
import Login from './components/Login/Login';
import ManagePackages from './components/ManagePackages/ManagePackages';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/tour" element={<Packages/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addpackage" element={<RequireAuth><AddPackage/></RequireAuth>}/>
            <Route path="/managepackages" element={<RequireAuth><ManagePackages/></RequireAuth>}/>
            <Route path="/booking/:packageId" element={<RequireAuth><Booking/></RequireAuth> }/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
