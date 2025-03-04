import React, { useState } from "react";
import {
  Calendar,
  Filter,
  MoreVertical,
  Search,
  SlidersHorizontal,
  Trash2,
  Upload,
  Monitor,
} from "lucide-react";

const ReportPage = () => {
  const [dateRange, setDateRange] = useState("July 25, 2026 - August 25, 2026");

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            GDPR Compliance Report
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto text-black">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
              <Calendar size={16} />
              <span>{dateRange}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full text-sm">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-black/10">
            <div className="flex justify-between items-start ">
              <div>
                <p className="text-gray-600 mb-1">Open Case</p>
                <h2 className="text-4xl font-bold text-black">1,648</h2>
              </div>
              <button>
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-black/10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 mb-1">Hearing</p>
                <h2 className="text-4xl font-bold text-black">19</h2>
              </div>
              <button>
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-black/10">
            <div className="flex justify-between items-start">
              <div className="font-beVietnam">
                <p className="text-gray-600 mb-1">Closed Case</p>
                <h2 className="text-4xl font-bold text-black">872</h2>
              </div>
              <button>
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-black/10">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Category wise Compliance
            </h3>
            <div className="h-64 relative">
              {/* Chart Placeholder - In a real app, you'd use a chart library */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-blue-50 rounded-lg relative overflow-hidden">
                  {/* Simplified chart representation */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    <div className="w-1/12 h-[60%] bg-blue-100"></div>
                    <div className="w-1/12 h-[70%] bg-blue-100"></div>
                    <div className="w-1/12 h-[75%] bg-blue-100"></div>
                    <div className="w-1/12 h-[65%] bg-blue-100"></div>
                    <div className="w-1/12 h-[55%] bg-blue-100"></div>
                    <div className="w-1/12 h-[60%] bg-blue-100"></div>
                    <div className="w-1/12 h-[80%] bg-blue-100"></div>
                    <div className="w-1/12 h-[85%] bg-blue-100"></div>
                    <div className="w-1/12 h-[70%] bg-blue-100"></div>
                    <div className="w-1/12 h-[60%] bg-blue-100"></div>
                    <div className="w-1/12 h-[75%] bg-blue-100"></div>
                    <div className="w-1/12 h-[70%] bg-blue-100"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full">
                    <svg viewBox="0 0 1000 300" className="w-full h-full">
                      <path
                        d="M0,150 C100,100 200,200 300,100 C400,0 500,100 600,150 C700,200 800,100 900,150 L900,300 L0,300 Z"
                        fill="none"
                        stroke="#4338ca"
                        strokeWidth="3"
                      />
                      {/* Chart point indicator */}
                      <circle cx="250" cy="120" r="20" fill="#1e293b" />
                      <text
                        x="250"
                        y="125"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                      >
                        700
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 px-4">
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8</span>
                <span>10</span>
                <span>12</span>
                <span>14</span>
                <span>16</span>
                <span>18</span>
                <span>20</span>
                <span>22</span>
              </div>
              {/* Y-axis labels */}
              <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>1,000</span>
                <span>900</span>
                <span>800</span>
                <span>700</span>
                <span>600</span>
                <span>500</span>
              </div>
            </div>
          </div>

          {/* Compliance Report Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-black/10">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Compliance Report</h3>
                <p className="text-sm text-gray-500">Your Compliance Report</p>
              </div>
              <button>
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>
            <div className="p-6 flex flex-col items-center">
              {/* Circular Progress */}
              <div className="relative w-40 h-40 mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="79"
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#333"
                  >
                    72.2%
                  </text>
                </svg>
              </div>
              <p className="text-gray-600 text-sm mb-1">
                Your compliance report is
              </p>
              <p className="font-bold text-lg mb-8">72.2%</p>

              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="71"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Monitor size={24} className="text-indigo-600" />
                    </div>
                  </div>
                  <p className="font-bold">75%</p>
                  <p className="text-sm text-gray-500">Policy</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="184"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-cyan-500 text-2xl font-bold">
                        !
                      </span>
                    </div>
                  </div>
                  <p className="font-bold">35%</p>
                  <p className="text-sm text-gray-500">Reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clause Details Table */}
        <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden border border-black/10">
          <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100">
            <h3 className="text-lg font-semibold text-black">Clause Details</h3>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-black">
                <SlidersHorizontal size={16} />
                <span>Filter</span>
              </button>
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search Clause"
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm w-full"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-6 py-3 text-sm font-medium text-gray-500">
                    Previous Clause
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-500">
                    Suggested Clause
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-500">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-500"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: 1, progress: 40 },
                  { id: 2, progress: 10 },
                  { id: 3, progress: 80 },
                ].map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">
                        Data transfers to non-EU countries must follow standard
                        contractual.
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">
                        Personal data transfers to non-EU countries must adhere
                        to the standard contractual .....
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-700">
                          {item.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 justify-end">
                        <button className="p-1.5 text-gray-500 hover:text-gray-700">
                          <Trash2 size={18} />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700">
                          <Upload size={18} />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700">
                          <MoreVertical size={18} />
                        </button>
                      </div>
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
