import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Link, Search } from "lucide-react";
import { FileUp } from "lucide-react";

const SingleProjectTable = ({ projectData }) => {
  // Sample data based on the provided JSON

  const safeProjectData = projectData || {};

  console.log("Data from singleProjectTable:", projectData);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "File Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "actions",
        header: "",
        cell: () => (
          <button className="flex items-center justify-center px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors">
            <Link className="w-4 h-4 mr-2" />
            Link
          </button>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: safeProjectData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="p-6  rounded-lg shadow-md text-white border border-white/20">
      <div className="flex w-full justify-between mb-6">
        <div>
          {safeProjectData.displayName ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-white">
                {safeProjectData.displayName}
              </h2>
              <p className="text-[#9DA1B3]">
                Project ID: {safeProjectData._id}
              </p>
            </>
          ) : (
            <p className="text-[#9DA1B3]">No project data available</p>
          )}
        </div>
        <div className="bg-[#0A0B1C] rounded-xl p-2 flex items-center gap-2 border border-[#251761]">
          <input
            type="text"
            placeholder="Upload Files"
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2"
          />
          <button className="bg-[#00DFA2] hover:bg-[#00c78f] text-[#0A0B1C] p-2 rounded-lg transition-colors">
            <FileUp />
          </button>
        </div>
      </div>

      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-[#9DA1B3]" />
        </div>
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="pl-10 p-2 bg-[#1A1433] border border-violet-500/40 rounded w-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
          placeholder="Search files..."
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="text-left text-[#9DA1B3]/70 border-b border-violet-500/40"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-3 px-4 font-medium cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          {
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() ?? null]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-t border-violet-500/20 hover:bg-[#251761]/30 transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-3 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {table.getRowModel().rows.length === 0 && (
          <div className="text-center py-4 text-[#9DA1B3]">No files found</div>
        )}
      </div>
    </div>
  );
};

export default SingleProjectTable;
