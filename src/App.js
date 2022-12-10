import "./App.css";
import DashboardA from "./views/DashboardA";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <DashboardA />
    </div>
  );
}

export default App;
