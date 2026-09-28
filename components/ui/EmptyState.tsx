import type { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

const EmptyState = ({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      {icon ? <div className="text-gray-300">{icon}</div> : null}
      <p className="text-sm font-semibold text-gray-800">{title}</p>
      {description ? (
        <p className="max-w-xs text-sm text-gray-400">{description}</p>
      ) : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
};

export default EmptyState;
