import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import MainHeader from './components/MainHeader'; 
import Contact from './pages/Contact';
import Home from './pages/Home';
import LabTest from './pages/LabTest';
import Profile from './account/Profile';
import Login from './account/Login';
import Register from './account/Register';
import LabAdmin from './account/profile/LabAdmin'
import Logout from './account/profile/Logout'
import Dashboard from '././dashboard/Dashboard';
import OfferedTest from '././dashboard/OfferedTest';
import Pages from '././dashboard/Pages';
import Orders from '././dashboard/Orders';
import CustomTestForm from "./dashboard/CustomTestForm";
import Cart from "./Cart/Cart";
import ProfileOrders from "./account/profile/ProfileOrders";
import Collections from './account/profile/Collections';
import Product from './account/profile/Product';
import EditOrder from "./Edits/EditOrder";
import Settings from "./superadmin/Settings";
import PredictPackages from "./components/PredictPackages";
import Overview from "./superadmin/Overview";
import Labs from "./superadmin/Labs";
import AdminPages from "./superadmin/AdminPages";
import AdminCollections from "./superadmin/AdminCollections";
import Documents  from "./superadmin/Documents";
import Inbox from "./superadmin/Inbox";
import Users from "./superadmin/Users";
import AddUser from "./superadmin/AddUser";
import AddCollections from "./superadmin/AddCollections";
import Sidebar from "./dashboard/Sidebar";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import AddNewLab from "./superadmin/AddNewLab";


const App = () => {
  const [user,setUser]=useState({email:"abdul@gmail.com"});
  return (
    <>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mainHeader" element={<MainHeader />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<LabTest/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profileorders" element={<ProfileOrders />} />


            {/* admin routes */}
          <Route  element={<ProtectedRoute user={user}/>}>
          <Route path="/labadmin" element={<LabAdmin />} />
          <Route path = "/overview" element={<Overview />} />
          <Route path="/users" element= {<Users />} />
          <Route path="/admincollections" element= {<AdminCollections />} />
          <Route path="/inbox" element= {<Inbox />} />
          <Route path="/labs" element= {<Labs />} />
          <Route path="/addUser" element={<AddUser/>}/>
          </Route>
        



          <Route path="/logout" element={<Logout />} />
          { <Route path="/products" element={<Product />} /> }
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/offeredtest" element={<OfferedTest />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/CustomTestForm" element={<CustomTestForm />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/collections" element={<Collections />} />
           <Route path="/book" element={<Product />} />
           <Route path = "/edit" element={<EditOrder />} />
           <Route path = "/predictPackages" element={<PredictPackages />} />
           <Route path = "/settings" element={<Settings />} />
         
           
           <Route path="/documents" element= {<Documents />} />
           
         
          
           <Route path="/adminPages" element= {<AdminPages />} />
          
           <Route path="/adminCollections" element={<AdminCollections/>}/>
           <Route path="/addCollections" element={<AddCollections/>}/>
           <Route pa="/addnewLab" element={<AddNewLab/>}/>
        </Routes>
        <Toaster />

        
    
      </div>
    
    </>
  );
}

export default App;
/*
 <Link to ="/cart">
                 <p style={{marginRight:"50px", paddingRight:"30px"}}>Login/Sign up <BsPerson/> </p>
             </Link>
                  <Link to="/profile">
                  <p style={{paddingLeft:"40px"}}> <BsPerson/> </p>
                  </Link>

*/ 