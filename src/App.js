import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardA from "./views/DashboardA";
import DashboardB from "./views/DashboardB";
import DashboardC from "./views/DashboardC";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="md:container md:mx-auto flex gap-6">
      <BrowserRouter>
        <section>
          <SideMenu />
        </section>
        <main className="py-6">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="flex flex-wrap">
            <Routes>
              <Route path="/" element={<DashboardA />} />
              <Route path="/dashboardB" element={<DashboardB />} />
              <Route path="/graficas" element={<DashboardC />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
