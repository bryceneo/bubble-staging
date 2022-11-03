import Dashboard from "./Components/Dashboard";
import Filters from "./Components/Filters";
import Timeline from "./Components/Timeline";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          {/* <Filters /> */}
          <Timeline />
          <Dashboard />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
