import type IColumn from "@/types/useColumn";

export const productColumns: IColumn[] = [
  {
    accessorKey: "productID",
    header: () => h("div", { class: "text-left hidden" }, "Product ID"),
    cell: ({ row }: any) => {
      return h("div", { class: "text-left" });
    },
  },
  {
    accessorKey: "preview",
    header: () => h("div", { class: "text-left" }, "Preview"),
    cell: ({ row }: any) => {
      const imageUrl = row.original.preview;
      return h("img", {
        src: imageUrl,
        class: "w-[70px] h-[65px] rounded",
        alt: "Preview Image",
      });
    },
  },
  {
    accessorKey: "product",
    header: () => h("div", { class: "text-left" }, "Product"),
    cell: ({ row }: any) =>
      h("div", { class: "text-left" }, row.getValue("product")),
  },
  {
    accessorKey: "price",
    header: () => h("div", { class: "text-left" }, "Price"),
    cell: ({ row }: any) => {
      const price = parseFloat(row.getValue("price"));
      return h(
        "div",
        { class: "text-left font-medium" },
        `$${price.toFixed(2)}`
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => h("div", { class: "text-left" }, "Quantity"),
    cell: ({ row }: any) => {
      const quantity = row.getValue("quantity");
      return h("div", { class: "pl-4 text-left font-medium" }, `${quantity}`);
    },
  },
  {
    accessorKey: "category",
    header: () => h("div", { class: "text-left" }, "Category"),
    cell: ({ row }: any) => {
      const category = row.getValue("category");
      return h(
        "div",
        { class: "text-left font-medium capitalize" },
        `${category}`
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: () => h("div", { class: "text-left" }, "Create Date"),
    cell: ({ row }: any) =>
      h(
        "div",
        { class: "text-left text-sm text-muted-foreground" },
        row.getValue("createdDate")
      ),
  },
  {
    accessorKey: "action",
    header: () => h("div", { class: "text-center" }, "Action"),
    cell: ({ row }: any) => {
      return h("div", { class: "flex justify-center" });
    },
  },
];
