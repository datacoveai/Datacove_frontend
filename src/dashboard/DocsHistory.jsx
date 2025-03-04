import React, { useState, useMemo } from "react";
import { Download, Search, ChevronUp, ChevronDown } from "lucide-react";
import useAppStore from "../store/useAppStore";
import DocsForClient from "./Table/DocsForClient";
import DocsForUser from "./Table/DocsForUser";

const DocsHistory = () => {
  const { user } = useAppStore();
  const docs = user.docs;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // Handle sorting
  const handleSort = (key) => {
    setSortConfig((currentSort) => ({
      key,
      direction:
        currentSort.key === key && currentSort.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  // Filter and sort documents
  const filteredAndSortedDocs = useMemo(() => {
    let filtered = [...docs];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (doc) =>
          doc.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [docs, searchTerm, sortConfig]);

  // Render sort indicator
  const SortIndicator = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronUp className="w-4 h-4 text-purple-400/40" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-purple-400" />
    ) : (
      <ChevronDown className="w-4 h-4 text-purple-400" />
    );
  };

  return (
    <div className="p-6 w-full mx-auto  ">
      <h3 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-start py-8 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
        Document History
      </h3>

      <div className="space-y-12">
        {/* Personal Docs */}
        <DocsForUser />

        {/* Documents shared for clients */}
        <DocsForClient />
      </div>
    </div>
  );
};

export default DocsHistory;
