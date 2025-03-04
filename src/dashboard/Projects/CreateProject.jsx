import React, { useContext, useEffect, useState } from "react";
import { FolderPlus } from "lucide-react";
import FolderTable from "../Table/FolderTable";
import axios from "axios";
import toast from "react-hot-toast";
import { useRef } from "react";
import { AppContext } from "../../context/AppContext";
const CreateProject = () => {
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);

  const { clientDocs } = useContext(AppContext);

  // setFolders(clientDocs);

  // console.log("CLient docs from table", clientDocs);

  // const createFolder = async () => {
  //   if (!folderName) {
  //     toast.error("Enter folder name");
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/v1/dashboard/create-folder",
  //       { folderName },
  //       { withCredentials: true }
  //     );
  //     // console.log("Response from create folder", response);
  //     if (response.status === 201) {
  //       toast.success("Folder created successfully");
  //     }
  //     setFolderName("");
  //   } catch (error) {
  //     console.error("Error creating folder:", error);
  //   }
  // };

  // const fetchFolders = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/v1/dashboard/get-folders",
  //       { withCredentials: true }
  //     );

  //     const allFolders = response.data.folders;
  //     // console.log("Respone from get folders", response.data.folders);
  //     setFolders(allFolders);
  //   } catch (error) {
  //     console.error("Error fetching folders:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchFolders();
  // }, [folders]);

  // const fetchFolders = async () => {
  //   try {
  //     const response = await axios.get("/api/folders/list");
  //   } catch (error) {
  //     console.error("Error fetching folders:", error);
  //   }
  // };

  return (
    <div className="space-y-3">
      {/* <div className="bg-[#0A0B1C] rounded-xl p-2 flex items-center gap-2 border border-[#251761]">
        <input
          type="text"
          placeholder="Create new project"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2"
        />
        <button className="bg-[#00DFA2] hover:bg-[#00c78f] text-[#0A0B1C] p-2 rounded-lg transition-colors">
          <FolderPlus className="w-5 h-5" onClick={createFolder} />
        </button>
      </div> */}
      <div className="w-full">
        <FolderTable folders={folders} />
      </div>
    </div>
  );
};

export default CreateProject;
