import "./App.css";
import Dashboard from "./views/Dashboard";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Dashboard />
    </div>
  );
}

export default App;
