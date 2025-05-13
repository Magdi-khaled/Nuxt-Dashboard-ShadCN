import type IOrder from "~/types/useOrder";
import type IOTypes from "~/types/useOTypes";
import { ref } from "vue";

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

  const categories = [
    "women's wear",
    "men's wear",
    "shoes",
    "bags",
    "accessories",
  ];

  const baseColors: string[] = [
    "bg-gray-400",
    "bg-neutral-800",
    "bg-red-300",
    "bg-red-600",
    "bg-red-800",
    "bg-orange-300",
    "bg-orange-600",
    "bg-orange-800",
    "bg-yellow-300",
    "bg-yellow-600",
    "bg-yellow-800",
    "bg-green-300",
    "bg-green-600",
    "bg-green-800",
    "bg-blue-300",
    "bg-blue-600",
    "bg-blue-800",
    "bg-amber-300",
    "bg-amber-600",
    "bg-amber-900",
    "bg-purple-300",
    "bg-purple-600",
    "bg-purple-800",
  ];
  const clothSizes: string[] = ["XL", "L", "M", "SM", "XS"];
  const shoeSizes: string[] = ["39", "40", "41", "42", "43", "44"];

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
    categories,
    baseColors,
    clothSizes,
    shoeSizes,
    generateDate,
    generateRandomValue,
    allOrderList,
  };
}
