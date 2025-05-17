// server/api/products/[id].get.ts
export default defineEventHandler((event) => {
  const id = event.context.params.id;
  return { id, name: `Product ${id}` };
});
