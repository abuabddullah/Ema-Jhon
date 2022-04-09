import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import OrdersDetails from './components/OrdersDetails/OrdersDetails';
import IndvDetails from './components/IndvDetails/IndvDetails';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shipping" element={
          <RequireAuth>
            <Shipping />
          </RequireAuth>
        } />
        <Route path="/details" element={<OrdersDetails />} >
          <Route path=":name" element={<IndvDetails />} />
        </Route>

        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
