import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Details from './components/Details';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/edit/:contactid' element={<Edit />}></Route>
          <Route path='/details/:contactid' element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
