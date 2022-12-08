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
import YearLine from "./Mobile/Components/YearLine";
import "rc-tooltip/assets/bootstrap_white.css";
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
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear() - 1
  );
  const [subjectForTimeline, setSubjectForTimeLine] = useState("");
  // console.log(selectedYear, "selectedYear");

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedFieldOfStudy("");
    setMajorBodyOfWork("");
    setInfluenceImpact("");
    setSelectedYear(new Date().getFullYear() - 1);
  };
  return (
    <>
      <DesktopSize>
        <>
          <div className="filter-header">
            <div className="container-fluid">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="main-wrapper-filter">
                      <Filters
                        SelectedCategory={SelectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                      <Filtertwo
                        selectedFieldOfStudy={selectedFieldOfStudy}
                        setSelectedFieldOfStudy={setSelectedFieldOfStudy}
                      />
                      <Filterthree
                        majorBodyOfWork={majorBodyOfWork}
                        setMajorBodyOfWork={setMajorBodyOfWork}
                      />
                      <Filterfour
                        InfluenceImpact={InfluenceImpact}
                        setInfluenceImpact={setInfluenceImpact}
                      />
                      <Filterfive
                        setSelectedYear={setSelectedYear}
                        selectedYear={selectedYear}
                      />
                      <div className="col-lg-2 text-end pt-3">
                        <a
                          className="clear-filter"
                          onClick={clearFilters}
                          style={{ cursor: "pointer" }}
                        >
                          Clear Filter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <BrowserRouter>
              <Timeline
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                // subjectForTimeline={subjectForTimeline}
                // setSubjectForTimeLine={setSubjectForTimeLine}
              />
              <Dashboard
                selectedYear={selectedYear}
                SelectedCategory={SelectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedFieldOfStudy={selectedFieldOfStudy}
                majorBodyOfWork={majorBodyOfWork}
                InfluenceImpact={InfluenceImpact}
                // setSubjectForTimeLine={setSubjectForTimeLine}
              />
            </BrowserRouter>
          </div>
        </>
      </DesktopSize>
      <MobileSize>
        <Mobile
          selectedYear={selectedYear}
          SelectedCategory={SelectedCategory}
          selectedFieldOfStudy={selectedFieldOfStudy}
          majorBodyOfWork={majorBodyOfWork}
          InfluenceImpact={InfluenceImpact}
          setSelectedCategory={setSelectedCategory}
          setSelectedFieldOfStudy={setSelectedFieldOfStudy}
          setMajorBodyOfWork={setMajorBodyOfWork}
          setInfluenceImpact={setInfluenceImpact}
          setSelectedYear={setSelectedYear}
        />
      </MobileSize>
    </>
  );
}

export default App;
