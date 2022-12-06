export const getRelatedSubjects = (selectedItem, Winners) => {
  if (selectedItem && !selectedItem?.Name) {
    let relatedSubjects = [];
    Winners?.map((winner) => {
      if (winner["Field of study and training"]?.includes(selectedItem)) {
        // console.log("Inside if");
        winner["Field of study and training"]?.split(",")?.map((item) => {
          relatedSubjects.push(item?.trim());
        });
      }
      if (winner["Major body of work -time of prize"]?.includes(selectedItem)) {
        // console.log("Inside if");
        winner["Major body of work -time of prize"]?.split(",")?.map((item) => {
          relatedSubjects.push(item?.trim());
        });
      }
      if (winner["Influence/Impact"]?.includes(selectedItem)) {
        // console.log("Inside if");
        winner["Influence/Impact"]?.split(",")?.map((item) => {
          relatedSubjects.push(item?.trim());
        });
      }
    });
    return Array.from(new Set(relatedSubjects));
  }
};
export const findColorOfSubject = (categoriesData, subject) => {
  return (
    categoriesData?.find((category) =>
      category.subjects?.includes(subject.trim())
    )?.colorCode || ""
  );
};
