import Dashboard from "./Components/Dashboard";
import Filters from "./Components/Filters";
import Timeline from "./Components/Timeline";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile/Mobile";

function App() {
  const useDesktopMediaQuery = () =>
    useMediaQuery({ query: "(min-width: 769px)" });

  const useMobileMediaQuery = () =>
    useMediaQuery({ query: "(max-width: 768px)" });

  const DesktopSize = ({ children }) => {
    const isDesktop = useDesktopMediaQuery();

    return isDesktop ? children : null;
  };

  const MobileSize = ({ children }) => {
    const isMobile = useMobileMediaQuery();

    return isMobile ? children : null;
  };
  return (
    <>
      <DesktopSize>
        <>
          <div className="container">
            <BrowserRouter>
              {/* <Filters /> */}
              <Timeline />
              <Dashboard />
            </BrowserRouter>
          </div>
        </>
      </DesktopSize>
      <MobileSize>
        <Mobile />
      </MobileSize>
    </>
  );
}

export default App;
