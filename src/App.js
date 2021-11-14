import logo from './logo.svg';
import './App.css';
import Main from './main.js';
import Header from './header.js';
import Profile from './profile.js'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Main/>
    </div>
  );
}

export default App;
