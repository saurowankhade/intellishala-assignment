import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/Select";
import { SearchInput } from "@/components/ui/SearchInput";

interface SelectOption {
  label: string;
  value: string;
}

interface TestsToolbarProps {
  count: number;
  search: string;
  onSearchChange: (value: string) => void;
  classValue: string;
  onClassChange: (value: string) => void;
  classOptions: SelectOption[];
  statusValue: string;
  onStatusChange: (value: string) => void;
  statusOptions: SelectOption[];
}

const TestsToolbar = ({
  count,
  search,
  onSearchChange,
  classValue,
  onClassChange,
  classOptions,
  statusValue,
  onStatusChange,
  statusOptions,
}: TestsToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-gray-900">My Tests</h2>
        <Badge.Blue small rounded>
          {count} {count === 1 ? "Test" : "Tests"}
        </Badge.Blue>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchInput
          className="sm:w-72"
          placeholder="Search Tests"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          onClear={() => onSearchChange("")}
        />
        {/* Mobile: the two filters sit side by side under the search box. */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
          <Select
            className="w-full sm:w-44"
            value={classValue}
            onChange={(event) => onClassChange(event.target.value)}
            options={classOptions}
          />
          <Select
            className="w-full sm:w-44"
            value={statusValue}
            onChange={(event) => onStatusChange(event.target.value)}
            options={statusOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TestsToolbar;
