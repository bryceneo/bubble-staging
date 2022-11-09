import Dashboard from "./Components/Dashboard";
import Filters from "./Components/Filters";
import Timeline from "./Components/Timeline";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile/Mobile";

function App() {
  const [isMobile, setIsMobile] = useState(
    useMediaQuery({ query: "(max-width: 1224px)" })
  );
  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <div className="container">
            <BrowserRouter>
              {/* <Filters /> */}
              <Timeline />
              <Dashboard />
            </BrowserRouter>
          </div>
        </>
      )}
    </>
  );
}

export default App;
