import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardA from "./views/DashboardA";
import DashboardB from "./views/DashboardB";
import DashboardC from "./views/DashboardC";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="md:container md:mx-auto flex">
      <BrowserRouter>
        <section>
          <SideMenu />
        </section>
        <main className="p-6 bg-slate-100">
          <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
          <div className="flex flex-wrap justify-between">
            <Routes>
              <Route path="/dashboard-test/" element={<DashboardA />} />
              <Route
                path="/dashboard-test/dashboardB"
                element={<DashboardB />}
              />
              <Route path="/dashboard-test/graficas" element={<DashboardC />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
