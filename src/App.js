import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Dashboard from "./Components/dashboard";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Dashboard />
    </div>
  );
}

export default App;
