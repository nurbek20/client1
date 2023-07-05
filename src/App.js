import './App.css';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Header from './components/header/header'


function App() {
  return (
    <div className="App">
      <Header/>
     <Register/>
     <Login/>
    </div>
  );
}

export default App;
