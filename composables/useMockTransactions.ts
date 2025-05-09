// composables/useMockTransactions.ts
export const useMockTransactions = () => {
  return useState("mock-transactions", () => {
    const generateRandomData = (numObjects: number) => {
      const statuses = ["pending", "processing", "completed"];
      const emails = [
        "example@gmail.com",
        "m@example.com",
        "test@example.com",
        "user@example.com",
      ];

      const randomData: any[] = [];

      for (let i = 0; i < numObjects; i++) {
        const id = Math.random().toString(36);
        const amount = Math.floor(Math.random() * 1000) + 50;
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const email = emails[Math.floor(Math.random() * emails.length)];

        randomData.push({ id, amount, status, email });
      }

      return randomData;
    };

    return generateRandomData(25);
  });
};
