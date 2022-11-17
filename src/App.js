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
        <div className="filter-header">
        <div className="container-fluid">
        <div className="container">
        <div className="row align-items-center">
             <div className="col-lg-10">
              <div className="main-wrapper-filter d-flex">
               <Filters />
               <Filtertwo></Filtertwo>
               <Filterthree></Filterthree>
               <Filterfour></Filterfour>
               <Filterfive></Filterfive>
          
              </div>
             </div>
             <div className="col-lg-2 text-end pt-3" >
             <a href="#" className="clear-filter">Clear Filter</a>
             </div>
             
            </div>
        </div>
        </div>
        </div>
        
          <div className="container">
            <BrowserRouter>
           
            
             
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
