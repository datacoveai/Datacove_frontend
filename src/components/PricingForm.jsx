import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const PricingForm = ({ selectedPlan, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { ...formData, plan: selectedPlan });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
        Complete Your Subscription
      </h2>

      <div className="mb-6 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
        <h3 className="text-lg font-semibold text-violet-400 flex justify-between">
          <div>{selectedPlan.title}</div> <div>{selectedPlan.plan}</div>
        </h3>
        <p className="text-gray-400">
          $
          {typeof selectedPlan.price === "number"
            ? `$${selectedPlan.price}${
                selectedPlan.isAnnual ? "/year" : "/month"
              }`
            : selectedPlan.price}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-400"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-400"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-400"
            placeholder="123 Main St, City, Country"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-[1.02]"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </form>
    </div>
  );
};

export default PricingForm;
