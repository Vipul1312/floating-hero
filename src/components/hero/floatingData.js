import { Receipt, Gavel, ListChecks, StickyNote } from "lucide-react";

export const floatingCards = [
  {
    id: "billing",
    label: "Billing",
    icon: Receipt,
    color: "blue",
    rotation: -8,
    top: "8%",
    left: "30%",
    size: "lg",
  },
  {
    id: "matters",
    label: "Matters",
    icon: Gavel,
    color: "orange",
    rotation: -10,
    top: "42%",
    left: "0%",
    size: "md",
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: ListChecks,
    color: "dark",
    rotation: -6,
    top: "68%",
    left: "12%",
    size: "md",
  },
  {
    id: "documents",
    label: "Documents",
    icon: StickyNote,
    color: "dark",
    rotation: -7,
    top: "60%",
    left: "48%",
    size: "lg",
  },
];
