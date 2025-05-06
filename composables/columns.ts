import type IColumn from "@/types/useColumn";
import { ArrowUpDown } from "lucide-vue-next";
import Button from "~/components/ui/button/Button.vue";

export const columns: IColumn[] = [
  {
    accessorKey: "email",
    header: ({ column }) =>
      h(
        Button,
        {
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "flex items-center gap-2 active:shadow-none",
          variant: "ghost",
        },
        ["Email", h(ArrowUpDown, { class: "h-4 w-4" })]
      ),
    cell: ({ row }) => row.getValue("email"),
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left" }, "Status"),
    cell: ({ row }: any) => {
      const status = row.getValue("status");

      return h("div", { class: "text-left font-medium" }, status);
    },
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-left" }, "Amount"),
    cell: ({ row }: any) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      return h("div", { class: "text-left font-medium" }, "$" + amount);
    },
  },
  {
    accessorKey: "id",
    header: () => h("div", { class: "text-left" }, "ID"),
    cell: ({ row }: any) => {
      const id = row.getValue("id");

      return h("div", { class: "text-left font-medium" }, id);
    },
  },
];
