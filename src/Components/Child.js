import React from "react";
import testPerson from "./Data/Pics/2.jpeg";
import { useNavigate } from "react-router-dom";
import DummyImage from "./Data/Pics/2.jpeg";
import CategoriesData from "./Data/CategoriesData";
import Avatar from "react-avatar";
function Child({ params, setSelectedItem, selectedItem }) {
  // console.log(params.id, params.backgroundColor);
  // console.log(params["Prize Category"], "asgbjhbas");
  const navigate = useNavigate();
  // const subjectClickHandler = (subID, isRouting) => {
  //   if (isRouting) {
  //     navigate(`/subject-details/${subID}`, {
  //       state: { subId: params.subjectId, subText: params.text },
  //     });
  //   }
  // };
  const personClickHandler = (lauID, isRouting) => {
    if (isRouting) {
      navigate(`/laurate-details/${lauID}`);
    }
  };
  if (params.Name) {
    return (
      <div
        style={{
          color: `#223247`,
          border: `5px solid ${
            CategoriesData.find((item) =>
              params["Prize Category"]?.includes(item?.name)
            )?.colorCode ||
            CategoriesData.find((item) => item?.name === "Others")?.colorCode
          }`,
          borderRadius: 100,
          // backgroundColor: `${params.backgroundColor}`,
          height: "90px",
          width: "90px",
          overflow: "hidden",
          // scale: 2,
          // opacity: `${params.isActive ? "100%" : "50%"}`,
          // cursor: `${params.isRouting ? "pointer" : null}`,
          cursor: "pointer",
        }}
        onClick={() => setSelectedItem(params)}
      >
        {/* {params} */}
        <img
          src={`images/${params?.Name}.jpg`}
          // srcset={`images/${params?.Name}.png,images/${params?.Name}.jpeg`}
          srcSet={`images/${params?.Name}.png 1280w,images/${params?.Name}.jpeg 1280w`}
          width="100%"
          // height="100%"
          alt={params.Name}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          borderRadius: 100,
          border: `2px solid #D2D2D2`,
          height: "90px",
          width: "90px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2px",
          overflow: "hidden",
          scale: 1,
          opacity: "100%",
          cursor: `pointer`,
        }}
        // onClick={() => personClickHandler(params.laurateId, params.isRouting)}
      >
        {params}
      </div>
    );
  }
  return <div>Failed</div>;
}

export default Child;
