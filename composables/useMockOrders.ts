// composables/useMockOrders.ts
export const useMockOrders = () => {
  return useState("mock-orders", () => {
    const { statuses, months, payments, products } = useHelper();

    const generateRandomTime = () => {
      const hour = Math.floor(Math.random() * 12) + 1;
      const minutes = Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0");
      const ampm = Math.random() > 0.5 ? "am" : "pm";
      return `${hour}:${minutes} ${ampm}`;
    };

    const generateRandomDate = () => {
      const month = months[Math.floor(Math.random() * months.length)];
      const day = Math.floor(Math.random() * 28) + 1;
      return `${month} ${day}, ${generateRandomTime()}`;
    };

    const generateRandomData = (num: number) => {
      const data = [];
      for (let i = 0; i < num; i++) {
        const orderID = `#${Math.floor(
          1000 + Math.random() * 9000
        )}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
        const product = products[Math.floor(Math.random() * products.length)];
        const orderDate = generateRandomDate();
        const price = (Math.random() * 400 + 50).toFixed(2);
        const payment = payments[Math.floor(Math.random() * payments.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        data.push({
          orderID,
          product,
          orderDate,
          price: parseFloat(price),
          payment,
          status,
        });
      }
      return data;
    };

    return generateRandomData(25);
  });
};
