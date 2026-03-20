export const CATEGORIES = {
  all: { label: "All", color: "bg-(--color-foreground) text-white" },
  tech: { label: "Tech", color: "bg-blue-100 text-blue-800" },
  football: { label: "Football", color: "bg-green-100 text-green-800" },
  investments: { label: "Investments", color: "bg-amber-100 text-amber-800" },
} as const;

export type Category = keyof Omit<typeof CATEGORIES, "all">;
