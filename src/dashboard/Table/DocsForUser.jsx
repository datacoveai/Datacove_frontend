import React, { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Search,
  ArrowUpDown,
  FileText,
  Download,
  Share2,
  X,
  Mail,
} from "lucide-react";
import useAppStore from "../../store/useAppStore";
import axios from "axios";
import toast from "react-hot-toast";

const DocsForUser = () => {
  const { user } = useAppStore();
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [sharePopup, setSharePopup] = useState({ isOpen: false, docId: null });
  const [shareEmail, setShareEmail] = useState("");

  // Filter docs for user only (forClient = false)
  const userDocs = useMemo(() => {
    return user.docs.filter((doc) => doc.forClient === "false");
  }, [user.docs]);

  console.log("Share pop up", sharePopup);

  const handleShare = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/upload/share-file",
        {
          docId: sharePopup.docId,
          clientEmail: shareEmail,
          fileName: sharePopup.name,
          fileUrl: sharePopup.fileUrl,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
      }

      // console.log("Response from share", response);
    } catch (error) {
      alert("Error sharing document: " + error.message);
    }

    setShareEmail("");
    setSharePopup({ isOpen: false, docId: null });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "SrNo",
        header: "Sr No",
      },
      {
        accessorKey: "Name",
        header: ({ column }) => (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Document Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center">
            <FileText className="mr-2 h-4 w-4 text-purple-600" />
            {row.original.Name}
          </div>
        ),
      },
      {
        accessorKey: "date",
        header: ({ column }) => (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex items-center space-x-4">
            <a
              href={row.original.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-purple-600 hover:text-purple-800 gap-2"
            >
              <Download className="mr-1 h-4 w-4 text-blue-500" />
              Download
            </a>
            <button
              onClick={() =>
                setSharePopup({
                  isOpen: true,
                  docId: row.original.SrNo,
                  name: row.original.Name,
                  fileUrl: row.original.fileUrl,
                })
              }
              className="flex items-center text-purple-600 hover:text-purple-800 gap-2"
            >
              <Share2 className="mr-1 h-4 w-4 text-green-500" />
              Share
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: userDocs,
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
    <div className="w-full mx-auto relative">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">
        User Documents
      </h1>

      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search documents..."
          className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-inherit"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-violet-500/40 shadow-md">
        <table className="min-w-full divide-y divide-gray-200/80">
          <thead className="bg-purple-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase  "
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-inherit divide-y divide-gray-200/10">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-purple-50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-white"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No documents found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Showing {table.getRowModel().rows.length} of {userDocs.length} documents
      </div>

      {/* Share Popup */}
      {sharePopup.isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all w-full max-w-md">
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-6 w-6 text-white" />
                    <h2 className="text-xl font-semibold text-white">
                      Share Document
                    </h2>
                  </div>
                  <button
                    onClick={() =>
                      setSharePopup({ isOpen: false, docId: null })
                    }
                    className="rounded-full p-1 hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <form className="space-y-4" onSubmit={handleShare}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Share with email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={shareEmail}
                        onChange={(e) => setShareEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-violet-600 rounded-lg shadow-sm focus:outline-none  "
                        placeholder="enter client email"
                        required
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSharePopup({ isOpen: false, docId: null })
                      }
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                    >
                      Share document
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocsForUser;
