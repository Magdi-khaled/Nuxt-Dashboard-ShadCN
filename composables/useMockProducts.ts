import type IProduct from "~/types/useProduct";

// composables/useMockProducts.ts
export const useMockProducts = () => {
  return useState("mock-products", () => {
    const {
      products,
      categories,
      baseColors,
      clothSizes,
      shoeSizes,
      generateDate,
    } = useHelper();

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
      "/media/products/product33.webp",
    ];

    const generateRandomProducts = (num: number): IProduct[] => {
      const data: IProduct[] = [];
      for (let i = 0; i < num; i++) {
        const productID = `${Math.floor(
          1000 + Math.random() * 9000
        )}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
        const preview =
          sampleImages[Math.floor(Math.random() * sampleImages.length)];
        const otherImages = [
          preview,
          sampleImages[Math.floor(Math.random() * sampleImages.length)],
          sampleImages[Math.floor(Math.random() * sampleImages.length)],
          sampleImages[Math.floor(Math.random() * sampleImages.length)],
        ];
        const name = products[Math.floor(Math.random() * products.length)];
        const description = "Amazing";
        const createdDate = generateDate();
        const price = parseFloat((Math.random() * 400 + 50).toFixed(2));
        const sale = Math.floor(Math.random() * 91);
        const category =
          categories[Math.floor(Math.random() * categories.length)];
        const colors = [
          baseColors[Math.floor(Math.random() * baseColors.length)],
        ];
        const sizes =
          category !== "shoes"
            ? [clothSizes[Math.floor(Math.random() * clothSizes.length)]]
            : [shoeSizes[Math.floor(Math.random() * shoeSizes.length)]];
        const quantity = parseFloat((Math.random() * 200 + 50).toFixed(0));

        data.push({
          productID,
          preview,
          otherImages,
          name,
          description,
          price,
          sale,
          colors,
          sizes,
          quantity,
          category,
          createdDate,
        });
      }
      return data;
    };

    return generateRandomProducts(25);
  });
};
