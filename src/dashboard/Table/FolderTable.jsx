import React, { useState, useMemo, useContext } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { ArrowLeft, ExternalLink, File } from "lucide-react";
import { Folder, ArrowUpDown, Search, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import useAppStore from "../../store/useAppStore";
import { AppContext } from "../../context/AppContext";

const FolderTable = ({ folders }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { clientDocs } = useContext(AppContext);

  const filteredClients = clientDocs.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleBackClick = () => {
    setSelectedClient(null);
  };

  return (
    <div className="min-h-screen  text-white p-6">
      <div className="w-full mx-auto">
        {selectedClient ? (
          // Document view
          <div className="w-full mx-auto rounded-lg shadow-xl border border-[#251761]/30 p-6 bg-[#0a1c36]">
            <div className="flex items-center mb-6">
              <button
                onClick={handleBackClick}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Clients
              </button>
            </div>

            <div className="flex items-center mb-4">
              <FolderOpen className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold">
                {selectedClient.name}'s Documents
              </h2>
            </div>

            <div className="mt-6">
              {selectedClient.docs && selectedClient.docs.length > 0 ? (
                <div className="space-y-4">
                  {selectedClient.docs.map((doc, index) => (
                    <div
                      key={index}
                      className="bg-[#0d2341] p-4 rounded-md border border-blue-500/40 hover:bg-blue-900/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <File className="w-5 h-5 text-blue-400 mr-3" />
                          <div>
                            <h3 className="font-medium">{doc.Name}</h3>
                            <p className="text-xs text-blue-300/70">
                              Date: {doc.date}
                            </p>
                          </div>
                        </div>
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:text-green-400 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-[#0d2341] rounded-md border border-blue-500/40">
                  <File size={32} className="text-blue-400/60 mx-auto mb-3" />
                  <p className="text-blue-300/70">No documents available</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Clients view
          <div className="w-full mx-auto rounded-lg shadow-xl border border-[#251761]/30 p-6 bg-[#0a1c36]">
            <h2 className="text-xl font-semibold mb-4">Clients Documents</h2>

            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-400" />
              </div>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 bg-[#0d2341] border border-blue-500/40 text-white placeholder-blue-300/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search clients..."
              />
            </div>

            {filteredClients.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {filteredClients.map((client) => (
                  <div
                    key={client._id}
                    onClick={() => handleClientClick(client)}
                    className="bg-[#0d2341] p-4 rounded-md border border-blue-500/40 hover:bg-blue-900/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FolderOpen className="w-6 h-6 text-blue-400" />
                      <span className="text-xs text-blue-300/70">
                        ID: {client._id.slice(-4)}
                      </span>
                    </div>
                    <h3 className="text-white font-medium truncate py-3">
                      {client.name}
                    </h3>
                    <div className="text-xs text-blue-300/70 mt-1">
                      {client.docs
                        ? `${client.docs.length} document(s)`
                        : "0 documents"}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 text-center py-12 bg-[#0d2341] rounded-md border border-blue-500/40">
                <FolderOpen
                  size={32}
                  className="text-blue-400/60 mx-auto mb-3"
                />
                <p className="text-blue-300/70">No clients available</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderTable;

{
  /* <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="text-left text-blue-300/80 border-b border-blue-500/40"
                  >
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="py-3 px-4 font-medium">
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
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-t border-blue-500/20 hover:bg-blue-900/30 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-3 px-4 text-white/90">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */
}
