import type IOrder from "~/types/useOrder";
import type IOTypes from "~/types/useOTypes";

export default function useHelper() {
  const open = useState("sidebar-open", () => false);
  const loading = ref(false);
  const statuses = [
    "ordered",
    "processing",
    "pending",
    "delivering",
    "completed",
  ];
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

  const generateRandomTime = () => {
    const hour = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0");
    const ampm = Math.random() > 0.5 ? "am" : "pm";
    return `${hour}:${minutes} ${ampm}`;
  };
  const generateDate = () => {
    const month = months[Math.floor(Math.random() * months.length)];
    const day = Math.floor(Math.random() * 28) + 1;
    return `${month} ${day}, ${generateRandomTime()}`;
  };

  const generateRandomValue = (number = 7): number[] => {
    let values = [];
    for (let j = 0; j < number + 1; j++) {
      values.push(Math.floor(Math.random() * 100));
    }
    return values;
  };

  const allOrderList = (data: IOrder[]): IOTypes => {
    let ordered = 0,
      processing = 0,
      pending = 0,
      delivering = 0,
      completed = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === "ordered") ordered++;
      else if (data[i].status === "processing") processing++;
      else if (data[i].status === "delivering") delivering++;
      else if (data[i].status === "pending") pending++;
      else completed++;
    }
    return { ordered, processing, delivering, pending, completed };
  };

  return {
    open,
    loading,
    statuses,
    payments,
    products,
    months,
    generateDate,
    generateRandomValue,
    allOrderList,
  };
}
