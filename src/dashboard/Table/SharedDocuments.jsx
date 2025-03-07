import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import { format } from "date-fns";
import { Search, ArrowUpDown } from "lucide-react";
import useAppStore from "../../store/useAppStore";

const SharedDocuments = () => {
  const { user } = useAppStore();
  const sharedDocs = user.sharedDocs;
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("docId", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            Doc Id
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("docName", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            Document Name
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("clientId", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            Shared To
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("sharedAt", {
        header: ({ column }) => (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting()}
          >
            Date
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        cell: (info) => format(new Date(info.getValue()), "PP"),
      }),

      columnHelper.accessor("docUrl", {
        header: "File Size",
        cell: () => "1.2 MB", // Placeholder since actual file size isn't in the data
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
    <div className="p-6  min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6">Shared Documents</h1>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search documents..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-blue-700/20 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-600"
        />
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-700">
        <table className="w-full">
          <thead className="bg-violet-800/20">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-sm font-medium text-gray-300"
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
                className="border-t border-gray-700 hover:bg-gray-800/50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SharedDocuments;
