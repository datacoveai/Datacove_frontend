import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SingleProjectTable from "../Table/SingleProjectTable";
import { Search } from "lucide-react";

const SingleProject = () => {
  const { singleProject } = useContext(AppContext);
  const [projectData, setProjectData] = useState(null);

  // Load project from localStorage when component mounts
  useEffect(() => {
    const storedProject = localStorage.getItem("singleProject");
    if (storedProject) {
      setProjectData(JSON.parse(storedProject)); // Parse JSON before setting state
    }
  }, []);

  // Store project in localStorage when it changes
  useEffect(() => {
    if (singleProject) {
      localStorage.setItem("singleProject", JSON.stringify(singleProject));
      setProjectData(singleProject);
    }
  }, [singleProject]);

  console.log("single-project", projectData);

  return (
    <div>
      <SingleProjectTable projectData={projectData} />{" "}
    </div>
  );
};

export default SingleProject;
