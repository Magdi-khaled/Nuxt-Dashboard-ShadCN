import type IColumn from "@/types/useColumn";

export const columns: IColumn[] = [
  {
    accessorKey: "orderID",
    header: () => h("div", { class: "text-left" }, "Order ID"),
    cell: ({ row }: any) =>
      h("div", { class: "text-left font-medium" }, row.getValue("orderID")),
  },
  {
    accessorKey: "product",
    header: () => h("div", { class: "text-left" }, "Product"),
    cell: ({ row }: any) =>
      h("div", { class: "text-left" }, row.getValue("product")),
  },
  {
    accessorKey: "orderDate",
    header: () => h("div", { class: "text-left" }, "Order Date"),
    cell: ({ row }: any) =>
      h(
        "div",
        { class: "text-left text-sm text-muted-foreground" },
        row.getValue("orderDate")
      ),
  },
  {
    accessorKey: "price",
    header: () => h("div", { class: "text-left" }, "Price"),
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("price"));
      return h(
        "div",
        { class: "text-left font-medium" },
        `$${amount.toFixed(2)}`
      );
    },
  },
  {
    accessorKey: "payment",
    header: () => h("div", { class: "text-left" }, "Payment"),
    cell: ({ row }: any) =>
      h("div", { class: "text-left" }, row.getValue("payment")),
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left" }, "Status"),
    cell: ({ row }: any) => {
      const value = row.getValue("status");
      const colorClass =
        value === "completed"
          ? "text-green-600"
          : value === "processing"
          ? "text-yellow-600"
          : "text-red-500";
      return h(
        "div",
        { class: `text-left font-semibold capitalize ${colorClass}` },
        value
      );
    },
  },
  {
    accessorKey: "action",
    header: () => h("div", { class: "text-center" }, "Action"),
    cell: ({ row }: any) => {
      return h("div", { class: "flex justify-center" });
    },
  },
];
