import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import UserProfile from './Components/UserProfile/UserProfile';
import AddEmployee from './Components/AddEmployee/AddEmployee';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Login></Login>}> </Route>
        <Route path='/home/:id' element={<Home />}>
          <Route index element={<UserProfile />} />
          <Route path='employee' element={<AddEmployee />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
