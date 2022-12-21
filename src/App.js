import Dashboard from "./Components/Dashboard";
import Filters from "./Components/Filters";
import Filtertwo from "./Components/Filtertwo";
import Filterthree from "./Components/Filterthree";
import Filterfour from "./Components/Filterfour";
import Filterfive from "./Components/Filterfive";
import Timeline from "./Components/Timeline";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile/Mobile";
import { useState } from "react";
import "rc-tooltip/assets/bootstrap_white.css";
import { AppContext } from "./Context/AppContext";

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

  const [SelectedCategory, setSelectedCategory] = useState("");
  const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState("");
  const [majorBodyOfWork, setMajorBodyOfWork] = useState("");
  const [InfluenceImpact, setInfluenceImpact] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedYearRange, setSelectedYearRange] = useState([
    new Date().getFullYear() - 2,
    new Date().getFullYear(),
  ]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedFieldOfStudy("");
    setMajorBodyOfWork("");
    setInfluenceImpact("");
    setSelectedYear(new Date().getFullYear());
  };

  return (
    <>
      <AppContext.Provider
        value={{
          SelectedCategory,
          setSelectedCategory,
          selectedFieldOfStudy,
          setSelectedFieldOfStudy,
          majorBodyOfWork,
          setMajorBodyOfWork,
          InfluenceImpact,
          setInfluenceImpact,
          selectedYear,
          setSelectedYear,
          selectedYearRange,
          setSelectedYearRange,
        }}
      >
        <DesktopSize>
          <>
            <div className="filter-header  ">
              <div className="container-fluid ">
                <div className="container ">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="main-wrapper-filter">
                        <Filters />
                        <Filtertwo />
                        <Filterthree />
                        <Filterfour />
                        <Filterfive />
                        <div className="col-lg-2 text-end pt-3">
                          <button
                            className="clear-filter"
                            onClick={clearFilters}
                            style={{ cursor: "pointer" }}
                          >
                            Clear Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <BrowserRouter>
                {typeof selectedYear !== "number" && <Timeline />}
                <Dashboard />
              </BrowserRouter>
            </div>
          </>
        </DesktopSize>
        <MobileSize>
          <Mobile />
        </MobileSize>
      </AppContext.Provider>
    </>
  );
}

export default App;
