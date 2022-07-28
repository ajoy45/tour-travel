import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CarDetails from './Components/CarDetails/CarDetails';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Rent from './Components/Rent/Rent';
import Login from './Components/Login/Login';
import Resister from './Components/Resister/Resister';
import AddNewCar from './Components/AddNewCar/AddNewCar';
import AllBooking from './Components/AllBooking/AllBooking';
import MyBooking from './Components/MyBooking/MyBooking';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cardetails/:id' element={<CarDetails></CarDetails>}/>
        <Route path='/contact' element={<ContactUs></ContactUs>}/>
        <Route path='/rent' element={<Rent></Rent>}/>
        <Route path='/login' element={
        
            <Login></Login>
        
       
        }/>
        <Route path='/singup' element={<Resister></Resister>}/>
        <Route path='/addnewcar' element={
          <RequireAuth>
                <AddNewCar></AddNewCar>
          </RequireAuth>
        
        }/>
        <Route path='/allbooking' element={
        <RequireAuth>
           <AllBooking></AllBooking>
        </RequireAuth>
        
        }/>
        <Route path='/mybooking' element={
        <RequireAuth>
             <MyBooking></MyBooking>
        </RequireAuth>
        }
        
        />
      </Routes>
       <Footer></Footer>
       <ToastContainer />
    </div>
  );
}

export default App;
