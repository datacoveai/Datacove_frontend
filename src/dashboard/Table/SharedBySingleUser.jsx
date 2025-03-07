import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import { format } from "date-fns";
import { Search, ArrowUpDown, FileText, Download } from "lucide-react";
import useAppStore from "../../store/useAppStore";

const SharedBySingleUser = () => {
  const { user } = useAppStore();
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  let sharedDocs = [];
  if (user.userType === "client") {
    sharedDocs = user.sharedDocs;
  }

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("fileName", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            File Name
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-400" />
            {row.original.fileName}
          </div>
        ),
      }),
      columnHelper.accessor("sharedByName", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            Shared By
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
      }),
      columnHelper.accessor("sharedAt", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            Shared Date
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        cell: ({ row }) => format(new Date(row.original.sharedAt), "PPP"),
      }),
      columnHelper.accessor("fileUrl", {
        header: "Action",
        cell: ({ row }) => (
          <a
            href={row.original.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <Download className="h-5 w-5" />
            Download
          </a>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: sharedDocs,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full  mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Shared Documents</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search documents..."
            className="pl-10 pr-4 py-2 rounded-lg bg-[rgb(12,20,60)] border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[rgb(12,20,60)] border-b border-gray-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left font-semibold"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
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
                className="border-b border-gray-700 hover:bg-[rgb(12,20,60)] transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {table.getRowModel().rows.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No documents found
          </div>
        )}
      </div>
    </div>
  );
};

export default SharedBySingleUser;
