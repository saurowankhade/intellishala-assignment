import { Button } from "@/components/ui/Button";
import { Plus } from "@/components/icons";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onCreate?: () => void;
}

const PageHeader = ({ title, subtitle, onCreate }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
        {subtitle ? <p className="text-gray-500">{subtitle}</p> : null}
      </div>
      <Button.Blue
        leftIcon={<Plus size={18} />}
        onClick={onCreate}
        className="shrink-0"
      >
        Create Test
      </Button.Blue>
    </div>
  );
};

export default PageHeader;
