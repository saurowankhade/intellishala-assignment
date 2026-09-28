//  return "28 Sep, 10:00 AM
export const formatDate = (date: string | null): string | null => {
  if (!date) return null;

  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
