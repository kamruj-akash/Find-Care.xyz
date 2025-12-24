import { Search } from "lucide-react";

const SearchFilterBar = () => {
  return (
    <div className="w-full rounded-2xl border bg-white p-6 shadow-sm">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search for services (e.g. Nanny, Senior Care...)"
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 text-sm outline-none focus:border-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-gray-500">Filters:</span>

        <FilterButton label="Service Type" />
        <FilterButton label="Availability" />
        <FilterButton label="Location" />
        <FilterButton label="Price Range" />

        <button className="ml-auto text-sm font-medium text-blue-500 hover:underline">
          Reset All
        </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;

/* ---------- Reusable Filter Button ---------- */
const FilterButton = ({ label }: { label: string }) => {
  return (
    <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {label}
      <span className="text-gray-400">▾</span>
    </button>
  );
};
