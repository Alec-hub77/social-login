import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <Post/> */}
      <Login/>
    </div>
  );
}

export default App;
