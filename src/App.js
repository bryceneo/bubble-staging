import Dashboard from "./Components/Dashboard";
import Filters from "./Components/Filters";
import Timeline from "./Components/Timeline";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Filters />
        <Timeline />
        <Dashboard />
      </BrowserRouter>
    </>
  );
}

export default App;
