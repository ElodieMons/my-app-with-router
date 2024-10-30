import { Link, Outlet } from "react-router-dom";
import "./App.css";


// the App

function App() {

  return (
    <>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </nav>
      <main> 
        <Outlet/>
      </main>
    </>
  );
}

export default App;