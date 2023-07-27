import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import List from './pages/list/List';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import Signin from './pages/login/Signin';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<Signin/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
