// server/api/products/index.get.ts
export default defineEventHandler(() => {
  return [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ];
});
