import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useAppStore from "../store/useAppStore";
import { formatDate } from "../context/SortDate";

const DocsHistory = () => {
  const { user } = useAppStore();
  const docs = user.docs || [];

  // Define columns for Data Grid
  const columns = [
    { field: "SrNo", headerName: "Sr. No", width: 200 },
    { field: "Name", headerName: "Document Name", width: 300 },
    {
      field: "date",
      headerName: "Uploaded Date",
      width: 200,
      color: "white",
      renderCell: (params) => (
        <span style={{ color: "#FFA500", fontWeight: "bold" }}>
          {params.value}
        </span>
      ),
    },
    {
      field: "fileUrl",
      headerName: "Download",
      width: 150,
      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Download
        </a>
      ),
    },
  ];

  return (
    <>
      <h2 className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-bold text-3xl py-3">
        Uploaded Documents
      </h2>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={docs}
          columns={columns}
          getRowId={(row) => row.SrNo} // Unique identifier for each row
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          autoHeight
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgb(6 11 39)", // Header background color (dark gray)
              color: "inherit", // Header text color
              fontSize: "16px",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              color: "#E5E7EB", // Row text color (light gray)
              fontSize: "14px",
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "#111827", // Row background color (dark)
              "&:hover": {
                backgroundColor: "#374151", // Hover effect
              },
            },
            "& .MuiCheckbox-root": {
              color: "grey !important", // Checkbox color (indigo)
            },
            "& .Mui-checked": {
              color: "#10B981 !important", // Checked checkbox color (green)
            },
          }}
        />
      </Box>
    </>
  );
};

export default DocsHistory;
