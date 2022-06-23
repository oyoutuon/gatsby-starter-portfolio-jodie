import {
    onlyProjects, shuffle
  } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";
  
  const modifyGrid = (data) => shuffle(onlyProjects(data));
  
  export default modifyGrid;

  