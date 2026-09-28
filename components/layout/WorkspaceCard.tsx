import { Badge } from "@/components/ui/Badge";

interface WorkspaceCardProps {
  name: string;
  role: string;
}

const WorkspaceCard = ({ name, role }: WorkspaceCardProps) => {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border border-gray-200 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
        Workspace
      </p>
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-gray-900">{name}</span>
        <Badge.Blue solid small>
          {role}
        </Badge.Blue>
      </div>
    </div>
  );
};

export default WorkspaceCard;
