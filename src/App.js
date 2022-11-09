import Dashboard from "./Components/Dashboard";
import Filters from "./Components/Filters";
import Timeline from "./Components/Timeline";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile/Mobile";

function App() {
  const useDesktopMediaQuery = () =>
    useMediaQuery({ query: "(min-width: 1280px)" });

  const useTabletAndBelowMediaQuery = () =>
    useMediaQuery({ query: "(max-width: 1279px)" });

  const Desktop = ({ children }) => {
    const isDesktop = useDesktopMediaQuery();

    return isDesktop ? children : null;
  };

  const TabletAndBelow = ({ children }) => {
    const isTabletAndBelow = useTabletAndBelowMediaQuery();

    return isTabletAndBelow ? children : null;
  };
  return (
    <>
      <Desktop>
        <>
          <div className="container">
            <BrowserRouter>
              {/* <Filters /> */}
              <Timeline />
              <Dashboard />
            </BrowserRouter>
          </div>
        </>
      </Desktop>
      <TabletAndBelow>
        <Mobile />
      </TabletAndBelow>
    </>
  );
}

export default App;
