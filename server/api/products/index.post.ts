// server/api/products/[id].put.ts
export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const body = await readBody(event);
  // Update product logic here
  return { message: `Product ${id} added`, data: body };
});
