import { ref } from "vue";
export default function useHelper() {
  const loading = ref(false);
  const open = ref(false);
  const statuses = ["processing", "completed", "pending"];
  const payments = ["Credit Card", "Visa", "PayPal", "Transfer"];
  const products = [
    "Nike Sportswear",
    "Adidas Running Shoes",
    "Puma Hoodie",
    "Under Armour Shorts",
    "New Balance Sneakers",
    "Reebok Gym Towel",
    "ASICS Trail Shoes",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

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

  const generateRandomValue = (number = 7): number[] => {
    let values = [];
    for (let j = 0; j < number + 1; j++) {
      values.push(Math.floor(Math.random() * 100));
    }
    return values;
  };

  return {
    open,
    loading,
    statuses,
    payments,
    products,
    months,
    generateRandomData,
    generateRandomValue,
  };
}
