// composables/useMockProducts.ts
export const useMockProducts = () => {
  return useState("mock-products", () => {
    const { products, generateDate } = useHelper();

    const sampleImages = [
      "/media/products/watch.webp",
      "/media/products/shoe.webp",
      "/media/products/shirt.avif",
      "/media/products/product16.webp",
      "/media/products/product21.webp",
      "/media/products/product22.webp",
      "/media/products/product23.webp",
      "/media/products/product24.webp",
      "/media/products/product25.webp",
      "/media/products/product26.webp",
      "/media/products/product32.webp",
      "/media/products/product33.webp",
    ];

    const generateRandomProducts = (num: number) => {
      const data = [];
      for (let i = 0; i < num; i++) {
        const productID = `${Math.floor(
          1000 + Math.random() * 9000
        )}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
        const preview =
          sampleImages[Math.floor(Math.random() * sampleImages.length)];
        const product = products[Math.floor(Math.random() * products.length)];
        const createdDate = generateDate();
        const price = parseFloat((Math.random() * 400 + 50).toFixed(2));
        const quantity = parseFloat((Math.random() * 200 + 50).toFixed(0));

        data.push({
          productID,
          preview,
          product,
          price,
          quantity,
          createdDate,
        });
      }
      return data;
    };

    return generateRandomProducts(25);
  });
};
