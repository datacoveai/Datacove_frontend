import React, { useState } from "react";
import {
  Calendar,
  Filter,
  MoreVertical,
  Search,
  SlidersHorizontal,
  Trash2,
  Share2,
  Monitor,
  AlertTriangle,
  Scale,
  BookOpen,
  FileText,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const ReportPage = () => {
  const [dateRange, setDateRange] = useState("July 25, 2026 - August 25, 2026");
  const [searchTerm, setSearchTerm] = useState("");

  const complianceData = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 72 },
    { name: "Mar", value: 68 },
    { name: "Apr", value: 75 },
    { name: "May", value: 80 },
    { name: "Jun", value: 82 },
    { name: "Jul", value: 85 },
  ];

  const pieData = [
    { name: "Compliant", value: 72.2 },
    { name: "Non-Compliant", value: 27.8 },
  ];

  const COLORS = ["#4f46e5", "#1f2937"];

  const keyLegalClauses = [
    {
      clause: "Installation Date",
      description:
        "The contractual agreement does not guarantee an exact completion date of February 22, 2024, but only projects it to be sometime in the last week of February 2024. Therefore, any delay beyond this is not a breach of contract.",
      progress: 40,
    },
    {
      clause: "Contract Completion",
      description:
        "MutliTurf intends to fulfill their contractual obligations and expects the same from Royal Badminton Club. The delay in project completion due to shipping disruptions is considered reasonable under the circumstances, and other external factors, outside of MultiTurf's control.",
      progress: 65,
    },
    {
      clause: "Obligations of Royal Badminton Club",
      description:
        "They are required to cooperate with MultiTurf and its employees for successful completion of the contract.",
      progress: 80,
    },
    {
      clause: "Consequences of Contract Cancellation",
      description:
        "Contract cancellation is not an option, as the badminton courts are custom made to specific requirements and cannot be re sold. If Royal Badmington Club rejects the completion of the contract, it could lead to financial losses on MultiTurf's part, for which they could hold Royal Badminton Club responsible.",
      progress: 55,
    },
    {
      clause: "Claims and Damages",
      description:
        "In case of a claim for damages, Royal Badminton Club has to prove that the delay was unreasonable and within MultiTurf's control, that they suffered losses as a result, and that they attempted to mitigate this. MultiTurf insists that Royal Badminton Club cannot uphold these legal requirements.",
      progress: 70,
    },
  ];

  const legalRisks = [
    {
      risk: "Breach of Contract",
      description:
        "One of the risks involved pertains to a contractual breach claim from Naveen's perspective if he can prove that the guarantee of installation by February 22, 2024, was mandatory.",
      progress: 75,
    },
    {
      risk: "Consequential Damages",
      description:
        "Naveen might also seek consequential losses due to the delayed opening of the badminton club. He may argue that these losses were foreseeable by MultiTurf, especially considering they absorbed extra shipping costs, implying they knew about possible delays.",
      progress: 60,
    },
    {
      risk: "Inadequate Force Majeure Clause",
      description:
        "If the contract did not adequately cover unforeseen situations like port delays impacting project timelines, Naveen could argue that MultiTurf should bear these risks.",
      progress: 45,
    },
  ];

  const precedents = [
    {
      case: "Hadley v Baxendale (1854)",
      principle: "Consequential Losses",
      application:
        "In this case, it was ruled that damages resulting from a breach are recoverable if they're either 'arising naturally' or within the 'reasonable contemplation of both parties'. This could help argue for compensation of the financial losses the club has suffered.",
      progress: 85,
    },
    {
      case: "Canada Steamship Lines Ltd v The King (1952)",
      principle: "Ambiguous Terms",
      application:
        "The 'contra proferentem' rule could be applied – any ambiguous terms would be interpreted against the party that enforced the contract. This could support Naveen's interpretation of the 'projected' completion date.",
      progress: 70,
    },
  ];

  const TableActions = ({ progress }) => (
    <div className="flex items-center gap-2">
      <div className="flex-1 flex items-center gap-2">
        <div className="w-32 bg-gray-700 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-400">{progress}%</span>
      </div>
      <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
        <Share2 size={18} />
      </button>
      <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
        <Trash2 size={18} />
      </button>
      <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
        <MoreVertical size={18} />
      </button>
    </div>
  );

  const TableHeader = ({ title, subtitle }) => (
    <div className="p-6 border-b border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg text-sm text-white border border-gray-600 hover:bg-gray-700 transition-colors">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="  max-w-7xl text-gray-100 border border-violet-500/40 mx-auto rounded-[1rem]">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              GDPR Compliance Report
            </h1>
            <p className="text-gray-400">
              Comprehensive analysis and risk assessment
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg text-sm text-white border border-gray-600 hover:bg-gray-700 transition-colors">
              <Calendar size={16} />
              <span>{dateRange}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg text-sm text-white border border-gray-600 hover:bg-gray-700 transition-colors">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">Open Cases</p>
                <h2 className="text-3xl font-bold text-white">1,648</h2>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <FileText size={24} className="text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">Hearings</p>
                <h2 className="text-3xl font-bold text-white">19</h2>
              </div>
              <div className="p-3 bg-violet-600/10 rounded-lg">
                <Scale size={24} className="text-violet-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">Closed Cases</p>
                <h2 className="text-3xl font-bold text-white">872</h2>
              </div>
              <div className="p-3 bg-green-500/10 rounded-lg">
                <BookOpen size={24} className="text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Chart Section */}
          <div className="lg:col-span-3 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Category-wise Compliance
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={complianceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Compliance Report Card */}
          <div className="lg:col-span-2 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Compliance Report
                </h3>
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <MoreVertical size={20} className="text-gray-400" />
                </button>
              </div>
              <p className="text-gray-400 text-sm">Overall compliance status</p>
            </div>

            <div className="p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {pieData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    ></div>
                    <span className="text-sm text-gray-400">
                      {entry.name} ({entry.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Legal Clauses Table */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 mb-8">
          <TableHeader
            title="Key Legal Clauses"
            subtitle="Important contractual clauses and their implications"
          />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Clause
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {keyLegalClauses.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {item.clause}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.description}
                    </td>
                    <td className="px-6 py-4">
                      <TableActions progress={item.progress} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legal Risks Table */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 mb-8">
          <TableHeader
            title="Legal Risks Assessment"
            subtitle="Potential legal risks and their implications"
          />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Risk
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {legalRisks.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {item.risk}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.description}
                    </td>
                    <td className="px-6 py-4">
                      <TableActions progress={item.progress} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legal Precedents Table */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700">
          <TableHeader
            title="Legal Precedents"
            subtitle="Relevant case law and their applications"
          />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Case
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Principle
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Application
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {precedents.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {item.case}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.principle}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.application}
                    </td>
                    <td className="px-6 py-4">
                      <TableActions progress={item.progress} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
