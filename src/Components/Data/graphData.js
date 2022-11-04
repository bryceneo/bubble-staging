const picGenerator = (node) => {
  return (
    <div
      style={{
        borderRadius: "100%",
        objectFit: "contain",
        overflow: "hidden",
        height: "80px",
        width: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={node.svg} height={"100%"} width={"100%"} />
    </div>
  );
};

const data = {
  links: [
    {
      source: "Anthropology",
      target: "25",
    },
    {
      source: "Anthropology",
      target: "Sociology",
    },
    {
      source: "Anthropology",
      target: "Economics",
    },
    {
      source: "Anthropology",
      target: "27",
    },
    {
      source: "Anthropology",
      target: "Environmental Studies",
    },
    {
      source: "Anthropology",
      target: "32",
    },
    {
      source: "Anthropology",
      target: "35",
    },
    {
      source: "Anthropology",
      target: "44",
    },
    {
      source: "Anthropology",
      target: "Migration Studies",
    },
    {
      source: "Anthropology",
      target: "History",
    },
    {
      source: "History",
      target: "Behavioral Science",
    },
    {
      source: "Sociology",
      target: "25",
    },
    {
      source: "25",
      target: "Economics",
    },
    {
      source: "Economics",
      target: "27",
    },
  ],
  nodes: [
    {
      id: "Anthropology",
      symbolType: "circle",
      labelPosition: "center",
      x: 150,
      y: 300,
    },
    {
      id: "Sociology",
      symbolType: "circle",
      labelPosition: "center",
    },
    {
      id: "Economics",
      symbolType: "circle",
      labelPosition: "center",
    },
    {
      id: "Environmental Studies",
      symbolType: "circle",
      labelPosition: "center",
    },
    {
      id: "History",
      symbolType: "circle",
      labelPosition: "center",
    },
    {
      id: "Behavioral Science",
      symbolType: "circle",
      labelPosition: "center",
    },
    {
      id: "Migration Studies",
      symbolType: "circle",
      labelPosition: "center",
    },
    {
      id: "25",
      name: "Max Eisenhardt",
      svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUg_S8jc9xjw-UYRvEBtPdjO1Ytj75rcajbn-FY7z&s",
      viewGenerator: picGenerator,
     
    },
    {
      id: "27",
      name: "Jhon Dow",
      svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYInlcLz-tohmDcaurwEy29Bk94eg1075l0Q&usqp=CAU",
      viewGenerator: picGenerator,
    },
    {
      id: "32",
      name: "Max fiels",
      svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY46bDjH2LeAM-zTiyngADD2TmlqpwAlwDyA&usqp=CAU",
      viewGenerator: picGenerator,
    },
    {
      id: "35",
      name: "Hans Eisenhardt",
      svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEdOGWCl2XyCAxD_pzARX98Swdft2_XB2zT-dCU4V8ovseWC5d5EVEi1bW4LHonanbIU&usqp=CAU",
      viewGenerator: picGenerator,
    },
    {
      id: "44",
      name: "Boom Box",
      svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iTjtrYlOkCwewoOOodDd-UzfZI6t-w3Ayw&usqp=CAU",
      viewGenerator: picGenerator,
    },
  ],
};

export default data;
