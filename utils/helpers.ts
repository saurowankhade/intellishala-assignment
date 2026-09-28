//  return "28 Sep, 10:00 AM
export const formatDate = (iso: string | null): string | null => {
  if (!iso) return null;

  return new Date(iso).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
